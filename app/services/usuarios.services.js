const { executeStoredProcedure, executeStoredProcedureSelect } = require("../config/db.utils.js");


exports.insertarUsuarios = async (idRol,idEstados,email,nombreCompleto,password,telefono,fechaNacimiento,fechaCreacion) => {
    const parameters = {idRol,idEstados,email,nombreCompleto,password,telefono,fechaNacimiento,fechaCreacion};
    return await executeStoredProcedure("insertarUsuarios @idRol=:idRol,@idEstados=:idEstados,@email=:email,@nombreCompleto=:nombreCompleto,@password=:password,@telefono=:telefono,@fechaNacimiento=:fechaNacimiento,@fechaCreacion=:fechaCreacion", parameters);
}

exports.editarUsuarios = async (idUsuarios,idRol,idEstados,email,nombreCompleto,password,telefono,fechaNacimiento) => {
    const parameters = {idUsuarios,idRol,idEstados,email,nombreCompleto,password,telefono,fechaNacimiento};
    return await executeStoredProcedure("editarUsuarios @idUsuarios=:idUsuarios,@idRol=:idRol,@idEstados=:idEstados,@email=:email,@nombreCompleto=:nombreCompleto,@password=:password,@telefono=:telefono,@fechaNacimiento=:fechaNacimiento", parameters);
}


exports.correoExiste = async (email) => {
    try{
        parameters = {email};
        const usuario = await executeStoredProcedureSelect("SesionUsuario @email=:email", parameters);
        if(usuario.length > 0){
            return usuario[0];
        }
    }
    catch(error){
        console.error("Error al buscar usuario por correo", error);
    }
};


