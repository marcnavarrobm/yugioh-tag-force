import { Model, DataTypes } from 'sequelize'
import db from '../config/connection.js'

class Deck extends Model { }

Deck.init({
    // Define los campos según la estructura de tu tabla
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_valid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    user_id: { // Añade esta nueva línea
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Deck',
    tableName: 'deck'
})

export default Deck
