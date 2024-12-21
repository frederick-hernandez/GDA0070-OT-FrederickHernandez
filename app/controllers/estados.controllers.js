const estadosServices = require("../services/estados.services");
exports.create = async (req, res) => {
  try {
    const { nombre } = req.body;
    await estadosServices.insertarEstados(nombre);
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

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const {nombre } = req.body;
    await estadosServices.editEstados(id, nombre);
    res.status(200).json({
      message: "Estados editado correctamente",
    });
  } catch (error) {
    console.error("Error al editar estados", error);
    res.status(500).json({
      message: "Error al editar estados",
    });
  }
};

