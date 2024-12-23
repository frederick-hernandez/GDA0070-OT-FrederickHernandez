const usuariosServices = require("../services/usuarios.services");
const { encrypt, compare } = require("../helpers/encrypt");
const { tokensign } = require("../helpers/generateTokens");
exports.create = async (req, res) => {
  try {
    const {
      idRol,
      idEstados,
      email,
      nombreCompleto,
      password,
      telefono,
      fechaNacimiento,
      fechaCreacion,
    } = req.body;
    const passwordHash = await encrypt(password);
    usuariosServices.insertarUsuarios(
      idRol,
      idEstados,
      email,
      nombreCompleto,
      String(passwordHash),
      telefono,
      fechaNacimiento,
      fechaCreacion
    );
    res.status(201).json({
      message: "Usuario insertado correctamente",
    });
  } catch (error) {
    console.error("Error al insertar usuario", error);
    res.status(500).json({
      message: "Error al insertar usuario",
    });
  }
};

exports.edit = async (req, res) => {
  try {
    const { idUsuarios } = req.params;
    const {
      idRol,
      idEstados,
      email,
      nombreCompleto,
      password,
      telefono,
      fechaNacimiento,
    } = req.body;
    const passwordHash = await encrypt(password);
    await usuariosServices.editarUsuarios(
      idUsuarios,
      idRol,
      idEstados,
      email,
      nombreCompleto,
      passwordHash,
      telefono,
      fechaNacimiento
    );
    res.status(200).json({
      message: "Usuario editado correctamente",
    });
  } catch (error) {
    console.error("Error al editar usuario", error);
    res.status(500).json({
      message: "Error al editar usuario",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Correo electrónico y contraseña son requeridos",
      });
    }

    const usuario = await usuariosServices.correoExiste(email);
    const tokenSession = await tokensign(usuario);
    if (!usuario) {
      return res.status(401).json({
        message: "Usuario no encontrado",
      });
    }
    const match = await compare(password, usuario.password);
    if (!match) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    return res.json({
      message: "Login exitoso",
      token: tokenSession
    });
  } catch (error) {
    console.error("Error al hacer login", error);

    if (!res.headersSent) {
      return res.status(500).json({
        message: "Error al hacer login",
      });
    }
  }
};
