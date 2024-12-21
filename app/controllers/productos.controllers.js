const productosServices = require("../services/productos.services");

exports.create = async (req, res) => {
  try {
    const {
      idCategoriaProductos,
      idUsuarios,
      nombre,
      marca,
      codigo,
      stock,
      idEstados,
      precio,
      fechaCreacion,
      foto,
    } = req.body;
    await productosServices.insertarProductos(
      idCategoriaProductos,
      idUsuarios,
      nombre,
      marca,
      codigo,
      stock,
      idEstados,
      precio,
      fechaCreacion,
      foto
    );
    res.status(201).json({
      message: "Producto insertado correctamente",
    });
  } catch (error) {
    console.error("Error al insertar producto", error);
    res.status(500).json({
      message: "Error al insertar producto",
    });
  }
};

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      idCategoria,
      idUsuarios,
      nombre,
      marca,
      codigo,
      stock,
      idEstados,
      precio,
      fechaCreacion,
      foto,
    } = req.body;
    await productosServices.editarProductos(
      id,
      idCategoria,
      idUsuarios,
      nombre,
      marca,
      codigo,
      stock,
      idEstados,
      precio,
      fechaCreacion,
      foto
    );
    res.status(200).json({
      message: "Producto editado correctamente",
    });
  } catch (error) {
    console.error("Error al editar producto", error);
    res.status(500).json({
      message: "Error al editar producto",
    });
  }
};
