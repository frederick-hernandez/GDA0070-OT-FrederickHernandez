const{Sequelize}  = require('sequelize');
const sequelize = require('./db.config.js');

console.log(Sequelize.QueryTypes);

const executeStoredProcedure = async (procedureName, parameters)=>{
    try{
    const result = await sequelize.query(`EXEC ${procedureName} ${parameters}`,{
        type: Sequelize.QueryTypes.RAW
    });
    return result;
    }
    catch(error){
        console.error('Error al ejecutar procedimiento almacenado:', error);
    }
    finally{
        sequelize.close();
    }
}

module.exports = {executeStoredProcedure};