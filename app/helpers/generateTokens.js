const jwt =require('jsonwebtoken');

const tokensign =async(usuario)     => {
    return jwt.sign({ id: usuario.id,
        idRol: usuario.idRol,
    }, process.env.SECRET_KEY, {
        expiresIn: "24h"
    });
}


module.exports = {tokensign};