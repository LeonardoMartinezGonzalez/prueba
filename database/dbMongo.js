import mongoose from 'mongoose'

const url = 'mongodb+srv://msclmartinez:EbEUJDGw7JWKnA8i@clusteritjcannabis.no9hpgr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterItjCannabis'

mongoose.connect(url)

const dbMongo = mongoose.connection

dbMongo.on('open', () => { console.log('Conectado a MongoDB') })
dbMongo.on('error', () => { console.log('Error al conectar a MongoDB') })

export default dbMongo;