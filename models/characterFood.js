import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'
import Character from './Character'
import Food from './Food'

class CharacterFood extends Model {}

CharacterFood.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Character,
                key: 'id'
            }
        },
        food_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: Food,
                key: 'id'
            }
        },
        effect: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: -5,
                max: 5
            }
        }
    },
    {
        sequelize,
        modelName: 'CharacterFood',
        tableName: 'character_food',
        timestamps: false
    }
)

export default CharacterFood
