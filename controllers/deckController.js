import Deck from '../models/deck.js'

class DeckController {
    // Obtener todas los mazos del usuario
    async getAllDecks(req, res) {
        const { id } = req.user
        try {
            const decks = await Deck.findAll({
                where: { user_id: id }
            })
            res.json(decks)
        } catch (error) {
            res.status(500).send('Error al obtener tus mazos: ' + error.message)
        }
    }

    // Obtener una carta por ID
    async getDeckById(req, res) {
        const { id } = req.params
        try {
            const deck = await Deck.findOne({
                where: {
                    id,
                    user_id: req.user.id
                }
            })
            if (deck) {
                res.json(deck)
            } else {
                res.status(404).send('Mazo no encontrado')
            }
        } catch (error) {
            res.status(500).send('Error al obtener el mazo: ' + error.message)
        }
    }

    // Crear una nueva carta
    async createDeck(req, res) {
        const { name, isValid } = req.body // Campos que se actualizarán
        try {
            const newDeck = await Deck.crete({
                name,
                is_valid: isValid,
                user_id: req.user.id
            })
            res.status(201).json(newDeck)
        } catch (error) {
            res.status(500).send('Error al crear el mazo: ' + error.message)
        }
    }

    // Función de actualización de mazos
    async updateDeck(req, res) {
        const { id } = req.params // ID del mazo a actualizar
        const { name, isValid } = req.body // Campos que se actualizarán
        try {
            // Actualiza el mazo donde el ID y el user_id coincidan
            const [updated] = await Deck.update({
                name,
                is_valid: isValid
            }, {
                where: {
                    id,
                    user_id: req.user.id
                }
            })

            if (updated) {
                const updatedDeck = await Deck.findOne({ where: { id } })
                res.send(updatedDeck) // Envía el mazo actualizado como respuesta
            } else {
                res.status(404).send({ message: 'Mazo no encontrada' })
            }
        } catch (error) {
            res.status(400).send({ message: 'Error al actualizar el mazo', error: error.message })
        }
    };

    // Eliminar una carta
    async deleteDeck(req, res) {
        const { id } = req.params
        try {
            const deleted = await Deck.destroy({
                where: {
                    id,
                    user_id: req.user.id
                }
            })

            if (deleted) {
                res.send('Mazo eliminado')
            } else {
                res.status(404).send('Mazo no encontrada')
            }
        } catch (error) {
            res.status(500).send('Error al eliminar el mazo: ' + error.message)
        }
    }
}

export default new DeckController()
