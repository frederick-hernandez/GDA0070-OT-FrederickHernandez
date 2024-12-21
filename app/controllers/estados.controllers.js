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

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await estadosServices.deleteEstados(id);
    res.status(200).json({
      message: "Estados eliminado correctamente",
    });
  } catch (error) {
    console.error("Error al eliminar estados", error);
    res.status(500).json({
      message: "Error al eliminar estados",
    });
  }
}

exports.getAll = async (req, res) => {
  try {
    const estados = await estadosServices.listarEstados();
    res.json(estados);
  } catch (error) {
    console.error("Error al obtener estados", error);
    res.status(500).json({
      message: "Error al obtener estados",
    });
  }
};

