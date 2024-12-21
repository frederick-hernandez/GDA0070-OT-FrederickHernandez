const { executeStoredProcedure ,executeStoredProcedureSelect} = require("../config/db.utils.js");

exports.insertarEstados = async (nombre) => {
  const parameters = {nombre};
  return await executeStoredProcedure("insertarEstados @nombre=:nombre", parameters);
};

exports.editEstados = async (idEstados, nombre) => {
  const parameters ={idEstados, nombre};
  return await executeStoredProcedure("editarEstados @idEstados=:idEstados,@nombre=:nombre", parameters);
};

exports.deleteEstados = async (idEstados) => {
  const parameters = {idEstados};
  return await executeStoredProcedure("eliminarEstados @id=:idEstados", parameters);
}

exports.listarEstados = async () => {
  return await executeStoredProcedureSelect("verEstados");
}


