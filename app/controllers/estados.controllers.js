const { insertarEstados } = require("../services/estados.services");

exports.create = async (req, res) => {
  try {
    const { nombre } = req.body;
    await insertarEstados(nombre);
    res.status(201).json({
      message: "Estados insertado correctamente",
    });
  } catch (error) {
    console.error("Error al insertar estados", error);
    res.status(500).json({
      message: "Error al insertar estados",
    });
  }
};


