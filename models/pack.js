import { Model, DataTypes } from 'sequelize'
import db from '../config/connection.js'

class Pack extends Model { }

Pack.init({
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
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unlock: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
    }
}, {
    sequelize: db,
    modelName: 'Pack',
    tableName: 'pack'
})

export default Pack
