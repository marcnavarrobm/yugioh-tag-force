import Card from '../models/card.js'
import { MonsterCard, SpellCard, TrapCard } from '../models/index.js' // Asegúrate de que la ruta al modelo sea correcta

class CardController {
    // Obtener todas las cartas
    async getAllCards(req, res) {
        try {
            const cards = await Card.findAll({
                include: [
                    { model: MonsterCard },
                    { model: SpellCard },
                    { model: TrapCard }
                ]
            })
            res.json(cards)
        } catch (error) {
            res.status(500).send('Error al obtener las cartas: ' + error.message)
        }
    }

    // Obtener una carta por ID
    async getCardById(req, res) {
        try {
            const card = await Card.findByPk(req.params.id, {
                include: [
                    { model: MonsterCard },
                    { model: SpellCard },
                    { model: TrapCard }
                ]
            })
            if (card) {
                res.json(card)
            } else {
                res.status(404).send('Carta no encontrada')
            }
        } catch (error) {
            res.status(500).send('Error al obtener la carta: ' + error.message)
        }
    }

    // Crear una nueva carta
    async createCard(req, res) {
        try {
            const newCard = await Card.create(req.body)
            res.status(201).json(newCard)
        } catch (error) {
            res.status(500).send('Error al crear la carta: ' + error.message)
        }
    }

    // Actualizar una carta
    async updateCard(req, res) {
        try {
            const [updated] = await Card.update(req.body, {
                where: { id: req.params.id }
            })
            if (updated) {
                res.send('Carta actualizada')
            } else {
                res.status(404).send('Carta no encontrada')
            }
        } catch (error) {
            res.status(500).send('Error al actualizar la carta: ' + error.message)
        }
    }

    // Eliminar una carta
    async deleteCard(req, res) {
        try {
            const deleted = await Card.destroy({
                where: { id: req.params.id }
            })
            if (deleted) {
                res.send('Carta eliminada')
            } else {
                res.status(404).send('Carta no encontrada')
            }
        } catch (error) {
            res.status(500).send('Error al eliminar la carta: ' + error.message)
        }
    }
}

export default new CardController()
