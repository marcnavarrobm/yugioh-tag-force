import { Model, DataTypes } from 'sequelize'

import db from '../config/connection.js' // Asegúrate de tener un archivo de conexión a la base de datos

class Card extends Model {
    static isValidCardImages(value) {
        if (!Array.isArray(value)) {
            throw new Error('El campo "card_images" debe ser un array de objetos JSON.')
        }

        for (const image of value) {
            if (typeof image !== 'object' ||
                !Object.prototype.hasOwnProperty.call(image, 'id') ||
                !Object.prototype.hasOwnProperty.call(image, 'image_url') ||
                !Object.prototype.hasOwnProperty.call(image, 'image_url_small') ||
                !Object.prototype.hasOwnProperty.call(image, 'image_url_cropped')) {
                throw new Error('Cada objeto en "card_images" debe contener las propiedades "id", "image_url", "image_url_small" y "image_url_cropped".')
            }
        }
    }
}

Card.init({
    // Define los campos según la estructura de tu tabla
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    card_images: {
        type: DataTypes.JSON, // Utiliza DataTypes.JSON para MySQL
        allowNull: false,
        validate: {
            isValidCardImages: Card.isValidCardImages
        }
    },
    rarity: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Common', 'Rare', 'Super', 'Ultra']
    },
    limit: {
        type: DataTypes.INTEGER,
        allowNull: false, // Puedes cambiar esto según tus requisitos
        validate: {
            min: 0,
            max: 3
        }
    },
    pack_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'pack', // Nombre de la tabla de paquetes
            key: 'id'
        }
    },
    frame: {
        type: DataTypes.ENUM,
        values: ['Normal', 'Effect', 'Fusion', 'Ritual', 'Spell', 'Trap'],
        allowNull: false
    },
    archetype: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'Card',
    tableName: 'card'
})

export default Card
