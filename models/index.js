// models/index.js
import Card from './card.js'
import MonsterCard from './monsterCard.js'
import SpellCard from './spellCard.js'
import TrapCard from './trapCard.js'
import Deck from './deck.js'
import Pack from './pack.js'
import Genre from './genre.js'
import DeckCard from './deckCard.js'
import User from './user.js'
import Character from './character.js'
import Food from './food.js'
import CharacterFood from './characterFood.js'
import db from '../config/connection.js' // Asegúrate de importar tu conexión a la base de datos

// Aquí definirías las relaciones
// Por ejemplo:
Card.hasOne(MonsterCard, { foreignKey: 'card_id' })
MonsterCard.belongsTo(Card, { foreignKey: 'card_id' })
// Repite para SpellCard y TrapCard...
Card.hasOne(SpellCard, { foreignKey: 'card_id' })
SpellCard.belongsTo(Card, { foreignKey: 'card_id' })

Card.hasOne(TrapCard, { foreignKey: 'card_id' })
TrapCard.belongsTo(Card, { foreignKey: 'card_id' })

// Relaciones para Deck y Card (muchos a muchos)
Deck.belongsToMany(Card, { through: DeckCard, foreignKey: 'deck_id' })
Card.belongsToMany(Deck, { through: DeckCard, foreignKey: 'card_id' })

// Relaciones para BoosterPack y Card (uno a muchos)
Pack.hasMany(Card, { foreignKey: 'pack_id' })
Card.belongsTo(Pack, { foreignKey: 'pack_id' })

// Relaciones para Card y Genre (muchos a muchos)
Card.belongsToMany(Genre, { through: 'card_genre', foreignKey: 'card_id' })
Genre.belongsToMany(Card, { through: 'card_genre', foreignKey: 'genre_id' })

Character.belongsToMany(Food, { through: CharacterFood, foreignKey: 'character_id' })
Food.belongsToMany(Character, { through: CharacterFood, foreignKey: 'food_id' })

// Relaciones para BoosterPack y Card (uno a muchos)
User.hasMany(Deck, { foreignKey: 'user_id' })
Deck.belongsTo(User, { foreignKey: 'user_id' })

export { db, Card, MonsterCard, SpellCard, TrapCard, Deck, Pack, Genre, DeckCard, User }
