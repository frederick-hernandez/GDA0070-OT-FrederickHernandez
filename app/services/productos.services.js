const { executeStoredProcedure } = require("../config/db.utils.js");


exports.insertarProductos = async (idCategoriaProductos, idUsuarios,nombre,marca,codigo, stock, idEstados,precio,fechaCreacion,foto) => {
    const fotoBinary = Buffer.from(foto, 'base64');
    const parameters={idCategoriaProductos, idUsuarios, nombre, marca, codigo, stock, idEstados, precio, fechaCreacion, foto: fotoBinary};
    return await executeStoredProcedure('insertarProductos @idCategoriaProductos=:idCategoriaProductos,@idUsuarios=:idUsuarios,@nombre=:nombre,@marca=:marca,@codigo=:codigo,@stock=:stock,@idEstados=:idEstados,@precio=:precio,@fechaCreacion=:fechaCreacion,@foto=:foto', parameters);
};

exports.editarProductos = async (idProductos,idCategoriaProductos, idUsuarios,nombre,marca,codigo, stock, idEstados,precio,fechaCreacion,foto) => {
    const fotoBinary = Buffer.from(foto, 'base64');
    const parameters={idProductos,idCategoriaProductos, idUsuarios, nombre, marca, codigo, stock, idEstados, precio, fechaCreacion, foto: fotoBinary};
    return await executeStoredProcedure("editarProductos @idProductos=:idProductos,@idCategoriaProductos=:idCategoriaProductos,@idUsuarios=:idUsuarios,@nombre=:nombre,@marca=:marca,@codigo=:codigo,@stock=:stock,@idEstados=:idEstados,@precio=:precio,@fechaCreacion=:fechaCreacion,@foto=:foto", parameters);
};

    

