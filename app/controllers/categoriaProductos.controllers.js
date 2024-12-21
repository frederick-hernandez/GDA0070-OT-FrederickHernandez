const categoriasProductosServices = require("../services/categoriaProductos.services");

exports.create = async (req, res) => {
  try {
    const { idUsuarios, nombre, idEstados, fechaCreacion } = req.body;
    await categoriasProductosServices.insertarCategoriaProducto(
      idUsuarios,
      nombre,
      idEstados,
      fechaCreacion
    );
    res.status(201).json({
      message: "CategoriasProductos insertado correctamente",
    });
  } catch (error) {
    console.error("Error al insertar CategoriasProductos", error);
    res.status(500).json({
      message: "Error al insertar CategoriasProductos",
    });
  }
};

exports.edit = async (req, res) => {
  try {
    const { idCategoriaProductos } = req.params;
    const { idUsuarios, nombre, idEstados } = req.body;
    await categoriasProductosServices.editarCategoriaProductos(
      idCategoriaProductos,
      idUsuarios,
      nombre,
      idEstados
    );
    res.status(200).json({
      message: "CategoriasProductos editado correctamente",
    });
  } catch (error) {
    console.error("Error al editar CategoriasProductos", error);
    res.status(500).json({
      message: "Error al editar CategoriasProductos",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { idCategoriaProductos } = req.params;
    await categoriasProductosServices.eliminarCategoriaProductos(idCategoriaProductos);
    res.status(200).json({
      message: "CategoriasProductos eliminado correctamente",
    });
  } catch (error) {
    console.error("Error al eliminar CategoriasProductos", error);
    res.status(500).json({
      message: "Error al eliminar CategoriasProductos",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const categoriasProductos = await categoriasProductosServices.obtenerCategoriasProductos();
    res.json(categoriasProductos);
  } catch (error) {
    console.error("Error al obtener CategoriasProductos", error);
    res.status(500).json({
      message: "Error al obtener CategoriasProductos",
    });
  }
}



