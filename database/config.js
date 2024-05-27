// Importar las variables de entorno
import { config } from 'dotenv'
config('../.env')

const MyConfig = {
    mysql: {
        host:  'localhost', //process.env.MYSQL_HOST ||
        user:  'root', //process.env.MYSQL_USER ||
        password:  'Enter12345', //process.env.MYSQL_PASSWORD ||
        database: 'itj_cannabis' //process.env.MYSQL_DB || 
    }
}

export default MyConfig;