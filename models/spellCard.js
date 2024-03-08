import { Model, DataTypes } from 'sequelize'

import db from '../config/connection.js'

class SpellCard extends Model { }

SpellCard.init({
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
        values: ['Normal', 'Continuous', 'Equip', 'Field', 'Quick-Play', 'Ritual'],
        defaultValue: 'Normal',
        allowNull: false
    }
}, { sequelize: db, modelName: 'SpellCard', tableName: 'spell_card' })

export default SpellCard
