const { executeStoredProcedure } = require("../config/db.utils.js");

exports.insertarEstados = async (nombre) => {
  const parameters = {nombre};
  return await executeStoredProcedure("insertarEstados @nombre=:nombre", parameters);
};

exports.editEstados = async (idEstados, nombre) => {
  const parameters ={idEstados, nombre};
  return await executeStoredProcedure("editarEstados @idEstados=:idEstados,@nombre=:nombre", parameters);
};
