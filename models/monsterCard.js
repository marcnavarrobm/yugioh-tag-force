import { Model, DataTypes } from 'sequelize'
import db from '../config/connection.js' // Asegúrate de tener un archivo de conexión a la base de datos

const races = ['Aqua', 'Beast', 'Beast-Warrior', 'Dinosaur', 'Dragon', 'Fairy', 'Fiend', 'Fish', 'Illusion', 'Insect', 'Machine',
    'Plant', 'Pyro', 'Reptile', 'Rock', 'Sea Serpent', 'Spellcaster', 'Thunder', 'Warrior', 'Winged Beast', 'Zombie']

class MonsterCard extends Model { }

MonsterCard.init({
    // Define los campos según la estructura de tu tabla
    card_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: 'card', // Nombre de la tabla de cartas
            key: 'id'
        }
    },
    atk: {
        type: DataTypes.INTEGER
    },
    def: {
        type: DataTypes.INTEGER
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 12,
            min: 1
        }
    },
    attribute: {
        type: DataTypes.ENUM,
        values: ['Earth', 'Water', 'Fire', 'Wind', 'Light', 'Dark'],
        allowNull: false
    },
    effect: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    ability: {
        type: DataTypes.ENUM,
        values: ['Flip', 'Toon', 'Spirit', 'Union']
    },
    race: {
        type: DataTypes.ENUM,
        values: races,
        allowNull: false
    }
    // Aquí puedes agregar campos adicionales según sea necesario
}, {
    sequelize: db,
    modelName: 'monsterCard',
    tableName: 'monster_card',
    timestamps: false // Asumiendo que no estás usando campos de timestamps como createdAt o updatedAt
})

export default MonsterCard
