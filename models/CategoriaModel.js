import { DataTypes } from "sequelize";
import db from '../database/db.js'

const CategoriaModel = db.define(
    'Categorias',
    {
      // Model attributes are defined here
      nombreCategoria: { type: DataTypes.STRING },
      imagenCategoria: { type: DataTypes.STRING, default: 'https://res.cloudinary.com/itesz-lweb-cannabis/image/upload/v1642092705/samples/cannabis/img/defaultCannabis_p2z7be.jpg' },
      estado: { type: DataTypes.BOOLEAN, default: true},
    })

export default CategoriaModel