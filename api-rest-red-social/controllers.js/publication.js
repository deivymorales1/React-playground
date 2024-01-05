const Publication = require("../models/publication");

// Guardar publicacion
const save = async (req, res) => {
  try {
    // Recoger datos del body
    const params = req.body;

    // Si no llega dar respuesta negativa
    if (!params.text) {
      return res.status(400).send({
        status: "error",
        message: "Debes enviar el texto de la publicación",
      });
    }

    // Crear y rellenar el objeto del modelo
    let newPublication = new Publication(params);
    newPublication.user = req.user.id;

    // Guardar objeto en la base de datos
    const publicationStored = await newPublication.save();

    if (!publicationStored) {
      return res.status(400).send({
        status: "error",
        message: "No se ha guardado la publicación",
      });
    }

    res.status(200).send({
      status: "success",
      message: "Publicación guardada",
      publicationStored,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "error",
      message: "Error al guardar la publicación",
      error: error.message,
    });
  }
};

// Sacar una publicacion
const detail = async (req, res) => {
  try {
    // Sacar id de publicación de la URL
    const publicationId = req.params.id;

    // Encontrar la publicación por id
    const publicationStored = await Publication.findById(publicationId);

    if (!publicationStored) {
      return res.status(404).send({
        status: "error",
        message: "No existe la publicación",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Mostrar publicación",
      publication: publicationStored,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: "error",
      message: "Error al obtener la publicación",
      error: error.message,
    });
  }
};

// Eliminar publicaciones

// Listar todas las publicaciones

// Listar publicaciones de un usuario

// Subir ficheros

// Devolver archivos multimedia

// Exportar acciones
module.exports = {
  save,
  detail,
};
