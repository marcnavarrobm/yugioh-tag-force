import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tier: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 3
            }
        },
        reward_card: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM,
            values: ['Male', 'Female', 'Other'],
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'Character',
        tableName: 'character',
        timestamps: true
    }
)

export default Character
