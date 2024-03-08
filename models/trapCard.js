import { Model, DataTypes } from 'sequelize'

import db from '../config/connection.js'

class TrapCard extends Model { }

TrapCard.init({
    card_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: 'card', // Nombre de la tabla de cartas
            key: 'id'
        }
    },
    type: {
        type: DataTypes.ENUM,
        values: ['Normal', 'Continuous', 'Counter'],
        defaultValue: 'Normal',
        allowNull: false
    }
}, { sequelize: db, modelName: 'TrapCard', tableName: 'trap_card' })

export default TrapCard
