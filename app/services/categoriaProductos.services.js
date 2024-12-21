const { executeStoredProcedure } = require("../config/db.utils.js");

exports.insertarCategoriaProducto = async (idUsuarios,nombre,idEstados,fechaCreacion) => {
    const parameters = {idUsuarios,nombre,idEstados,fechaCreacion};
    return await executeStoredProcedure("insertarCategoriaProductos @idUsuarios=:idUsuarios,@idEstados=:idEstados,@nombre=:nombre,@fechaCreacion=:fechaCreacion", parameters);
};

exports.editarCategoriaProductos = async (idCategoriaProductos, idUsuarios, nombre, idEstados) => {
    const parameters = {idCategoriaProductos, idUsuarios, nombre, idEstados};
    return await executeStoredProcedure("editarCategoriaProductos @idCategoriaProductos=:idCategoriaProductos,@idUsuarios=:idUsuarios,@nombre=:nombre,@idEstados=:idEstados", parameters);
};

exports.eliminarCategoriaProductos = async (idCategoriaProductos) => {
    const parameters = {idCategoriaProductos};
    return await executeStoredProcedure("eliminarCategoriaProductos @id=:idCategoriaProductos", parameters);
};

exports.obtenerCategoriasProductos = async () => {
    return await executeStoredProcedure("verCategoriaProductos");
};



