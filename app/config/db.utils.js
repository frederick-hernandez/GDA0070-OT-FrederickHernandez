const{Sequelize}  = require('sequelize');
const sequelize = require('./db.config.js');

const executeStoredProcedure = async (procedureName, parameters)=>{
    try{
    const result = await sequelize.query(`EXEC ${procedureName}`,{
        replacements: parameters,
        type: Sequelize.QueryTypes.RAW
    });
    return result;
    }
    catch(error){
        console.error('Error al ejecutar procedimiento almacenado:', error);
    }
}

const executeStoredProcedureSelect = async (procedureName, parameters)=>{
    try{
    const result = await sequelize.query(`EXEC ${procedureName}`,{
        replacements: parameters,
        type: Sequelize.QueryTypes.SELECT
    });
    return result;
    }
    catch(error){
        console.error('Error al ejecutar procedimiento almacenado:', error);
    }
}


module.exports = {executeStoredProcedure,executeStoredProcedureSelect};