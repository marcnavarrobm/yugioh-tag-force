import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Food',
        tableName: 'food',
        timestamps: true
    }
)

export default Food
