import { Model } from 'sequelize'
import db from '../config/connection.js' // Asegúrate de tener un archivo de conexión a la base de datos

class CardGenre extends Model { }

CardGenre.init(
    {
        // No es necesario agregar campos adicionales si solo estás representando la relación
    },
    {
        sequelize: db, // Instancia de Sequelize (asegúrate de importarla o definirla previamente)
        modelName: 'CardGenre', // Nombre del modelo
        tableName: 'card_genre' // Nombre de la tabla en la base de datos (puedes personalizarlo)
    }
)

export default CardGenre
