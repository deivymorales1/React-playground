// Importar dependencias y modulos
const bcrypt = require("bcrypt");
const mongoosePaginate = require("mongoose-pagination");
const fs = require("fs");

// Importar modelos
const User = require("../models/user");

// Importar servicios
const jwt = require("../services/jwt");
const user = require("../models/user");
const fastify = require("fastify");

// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde: controllers/user.js",
    usuario: req.user,
  });
};

const register = async (req, res) => {
  // Recoger datos de la petición
  let params = req.body;

  // Comprobar que se envían todos los datos necesarios
  if (!params.name || !params.email || !params.password || !params.nick) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  try {
    // Control de usuarios duplicados
    const existingUsers = await User.find({
      $or: [
        { email: params.email.toLowerCase() },
        { nick: params.nick.toLowerCase() },
      ],
    });

    if (existingUsers && existingUsers.length >= 1) {
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe",
      });
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;

    // Crear objeto de usuario
    const user_to_save = new User(params);

    // Guardar usuario en la base de datos
    const userStored = await user_to_save.save();

    if (!userStored) {
      return res.status(500).send({
        status: "error",
        message: "Error al guardar usuario",
      });
    }

    // Devolver resultado
    return res.status(200).json({
      status: "success",
      message: "Usuario registrado correctamente",
      user: userStored,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en el registro de usuarios",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  // Recojer parametros body
  let params = req.body;

  if (!params.email || !params.password) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  try {
    // Buscar en la bbdd si existe el usuario
    const user = await User.findOne({ email: params.email });

    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "No existe usuario",
      });
    }

    // Ejemplo: Verificar la contraseña
    const passwordMatch = await bcrypt.compare(params.password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({
        status: "error",
        message: "Contraseña incorrecta",
      });
    }

    // Conseguir token
    const token = jwt.createToken(user);

    // Devolver Token y otros datos del usuario
    return res.status(200).send({
      status: "success",
      message: "Te has identificado correctamente",
      user: {
        id: user.id,
        name: user.name,
        nick: user.nick,
      },
      token,
      // Agregar el token aquí si es necesario
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error en la acción de login",
      error: error.message,
    });
  }
};

const profile = async (req, res) => {
  try {
    // Recibir el parámetro del id de usuario por la URL
    const id = req.params.id;

    // Consulta para sacar los datos del usuario
    const userProfile = await User.findById(id).select({
      password: 0,
      role: 0,
    });

    if (!userProfile) {
      return res.status(404).send({
        status: "error",
        message: "El usuario no existe o hay un error",
      });
    }

    // Devolver resultado con contraseña y rol ocultos
    return res.status(200).send({
      status: "success",
      user: userProfile,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Error al obtener el perfil del usuario",
      error: error.message,
    });
  }
};

const list = (req, res) => {
  // Controlar que pagina estamos
  let page = 1;
  if (req.params.page) {
    page = req.params.page;
  }

  page = parseInt(page);

  // Consulta con mongoose pagination
  let itemsPerPage = 5;

  User.sort("_id").paginate(page, itemsPerPage, (error, users, total) => {
    if (error || !users) {
      return res.status(404).send({
        status: "error",
        message: "No hay usuarios disponibles",
        error,
      });
    }
    // Devolver resultado
    return res.status(200).send({
      status: "success",
      users,
      page,
      itemsPerPage,
      total,
      pages: Math.ceil(total / itemsPerPage),
    });
  });
};

const update = async (req, res) => {
  try {
    // Recoger info del usuario.
    let userIdentity = req.user;
    let userToUpdate = req.body;

    // Eliminar campos sobrantes
    delete userToUpdate.iat;
    delete userToUpdate.exp;
    delete userToUpdate.role;
    delete userToUpdate.image;

    // Control de usuarios duplicados
    const existingUsers = await User.find({
      $or: [
        { email: userToUpdate.email ? userToUpdate.email.toLowerCase() : null },
        { nick: userToUpdate.nick ? userToUpdate.nick.toLowerCase() : null },
      ],
    });

    let userIsset = existingUsers.some(
      (user) => user && user._id !== userIdentity.id
    );

    // Cifrar la contraseña
    if (userToUpdate.password) {
      let hashedPassword = await bcrypt.hash(userToUpdate.password, 10);
      userToUpdate.password = hashedPassword;
    }

    // Buscar y actualizar
    const userUpdated = await User.findByIdAndUpdate(
      userIdentity.id,
      userToUpdate,
      { new: true }
    );

    // Devolver respuesta
    if (!userUpdated) {
      return res.status(500).json({
        status: "error",
        message: "Error al actualizar",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Método de actualizar usuario",
      user: userUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al actualizar usuarios",
      error: error.message,
    });
  }
};

const upload = async (req, res) => {
  try {
    // Recoger el fichero de imagen y comprobar que existe
    if (!req.file) {
      return res.status(404).send({
        status: "error",
        message: "Peticion no incluye la imagen",
      });
    }

    // Conseguir el nombre del archivo
    let image = req.file.originalname;

    // Sacar la extension del archivo
    const imageSplit = image.split(".");
    const extension = imageSplit[1];

    // Comprobar extension
    if (
      extension != "png" &&
      extension != "jpg" &&
      extension != "gif" &&
      extension != "jpeg"
    ) {
      // Borrar archivo subido
      const filePath = req.file.path;
      const fileDeleted = fs.unlinkSync(filePath);

      // Devolver respuesta
      return res.status(400).send({
        status: "error",
        message: "Extension del fichero invalida",
      });
    }

    // Usar async/await para manejar la promesa devuelta por findOneAndUpdate
    const userUpdated = await User.findOneAndUpdate(
      { _id: req.user.id },
      { image: req.file.filename },
      { new: true }
    );

    if (!userUpdated) {
      return res.status(500).send({
        status: "error",
        message: "Error en la subida del avatar",
      });
    }

    // Devolver respuesta
    return res.status(200).send({
      status: "success",
      user: userUpdated,
      file: req.file,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "error",
      message: "Error en la subida del avatar",
    });
  }
};

// Exportar acciones
module.exports = {
  pruebaUser,
  register,
  login,
  profile,
  list,
  update,
  upload,
};
