import { DataTypes, Model } from 'sequelize'

import db from '../config/connection.js' // Asegúrate de tener un archivo de conexión a la base de datos

class Genre extends Model { }

Genre.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM(
                'Destruction',
                'Monster categories',
                'Disruption',
                'Support',
                'Hand',
                'Battle',
                'Life Points',
                'Items',
                'Summoning',
                'Misc'
            ),
            allowNull: false
        },
        iconUrl: {
            type: DataTypes.STRING, // Almacena la ruta de la imagen
            allowNull: false // Puede ser necesario cambiar esto según tus necesidades
        }
    },
    {
        sequelize: db, // Instancia de Sequelize (asegúrate de importarla o definirla previamente)
        modelName: 'Genre', // Nombre del modelo
        tableName: 'genre',
        timestamps: false
    }
)

export default Genre
