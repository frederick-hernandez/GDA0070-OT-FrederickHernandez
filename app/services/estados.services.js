const {executeStoredProcedure}= require('../config/db.utils.js');


const insertarEstados= async (nombre) => {
        const parameters = `@nombre=${nombre} `;
        return await executeStoredProcedure('insertarEstados', parameters);
};

module.exports = {insertarEstados};
