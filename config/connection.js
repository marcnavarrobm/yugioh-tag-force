import { Sequelize } from 'sequelize'

// Crear una nueva instancia de Sequelize
const db = new Sequelize('yugi', 'root', 'root', {
    host: 'localhost', // o la dirección de tu servidor de base de datos
    dialect: 'mysql' // o el dialecto de la base de datos que estás usando (por ejemplo, 'postgres', 'sqlite', etc.)
})

export default db
