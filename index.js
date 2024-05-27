import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import ClienteRoutes from './routes/ClienteRoutes.js'
import CategoriaRoutes from './routes/CategoriaRoutes.js'



// Crear la Aplicación App
const app = express()

// Conficguración de la Aplicación app
app.use( cors() )
app.use( express.json() )
app.use ( '/api/clientes', ClienteRoutes ) // http://localhost:3000/api/clientes
app.use( '/api/categorias', CategoriaRoutes)
// Probar la conexion a la Base de Datos
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Crear una ruta 
app.get('/', (req,res) =>{
    res.send('Bienvenido al backend Cannabis ver 1.0')
})


// Poner en servicio la app
app.listen(3000, () => {
    console.log('Servicdor esta funcionando: http://localhost:3000')
})