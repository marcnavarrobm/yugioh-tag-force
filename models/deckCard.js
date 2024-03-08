import { Model, DataTypes } from 'sequelize'

import db from '../config/connection.js'
import Deck from './deck.js'
import Card from './card.js'

const MIN_CARDS_MAIN_DECK = 40
const MIN_CARDS_MAIN_DECK_AT_LEAST_ONE = 1
const MAX_CARDS_SIDE_DECK = 15
const MAX_CARDS_EXTRA_DECK = 15

class DeckCard extends Model { }

DeckCard.init({
    // Define los campos según la estructura de tu tabla
    deck_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'deck',
            key: 'id'
        }
    },
    card_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'card',
            key: 'id'
        }
    },
    section: {
        type: DataTypes.ENUM,
        values: ['main', 'side', 'extra'],
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'DeckCard',
    tableName: 'deck_card'
})

DeckCard.afterCreate(async (deckCard, options) => {
    await validateDeck(deckCard)
})

DeckCard.afterDestroy(async (deckCard, options) => {
    await validateDeck(deckCard)
})

async function validateDeck(deckCard) {
    const { deckId, cardId, section } = deckCard

    const deck = await Deck.findByPk(deckId)
    const card = await Card.findByPk(cardId)
    if (!deck || !card) return

    // Validar el límite de copias de la carta
    const isValidCopy = await validateCopyLimit(card, deckId)

    // Validar el tamaño de la sección del mazo
    const isValidSection = await validateDeckSize(deckId, section) // Cambiado de listType a section

    await deck.update({ is_valid: isValidCopy && isValidSection })
}

async function validateCopyLimit(card, deckId) {
    const count = await DeckCard.count({
        where: {
            card_id: card.id,
            deck_id: deckId
        }
    })

    return count <= card.limit
}

async function validateDeckSize(deckId, section) {
    const count = await DeckCard.count({
        where: {
            deck_id: deckId,
            section
        }
    })

    const validations = {
        main: () => count >= MIN_CARDS_MAIN_DECK_AT_LEAST_ONE && count >= MIN_CARDS_MAIN_DECK,
        side: () => count <= MAX_CARDS_SIDE_DECK,
        extra: () => count <= MAX_CARDS_EXTRA_DECK
    }

    const validate = validations[section] || (() => {
        console.error(`Sección desconocida: ${section}`)
        return false
    })

    return validate()
}

export default DeckCard
