import { DataTypes } from "sequelize";
import db from '../database/db.js'

const ClienteModel = db.define(
    'Clientes',
    {
      // Model attributes are defined here
      nombreUsuario: { type: DataTypes.STRING },
      correo: { type: DataTypes.STRING, unique: true },
      contrasena: { type: DataTypes.STRING },
      telefono: { type: DataTypes.STRING, unique: true },
      nombre: { type: DataTypes.STRING },
      apellidos: { type: DataTypes.STRING },
      direccion: { type: DataTypes.STRING },
      ciudad: { type: DataTypes.STRING },
      codigoPostal: { type: DataTypes.STRING },
      codigoPostal: { type: DataTypes.STRING },
      imageFile: { type: DataTypes.STRING },
      banderaGmail: { type: DataTypes.BOOLEAN },
      estadoUsuario: { type: DataTypes.BOOLEAN },
    })

export default ClienteModel