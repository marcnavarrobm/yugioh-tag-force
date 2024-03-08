import { Router } from 'express'
import auth from '../middleware/auth.js' // Asegúrate de que la ruta a tu middleware de autenticación sea correcta
import deckController from '../controllers/deckController.js'

const router = new Router()

// Rutas que no requieren autenticación
router.get('/', auth, deckController.getAllDecks)
router.post('/', auth, deckController.createDeck) // Ejemplo si deseas que la creación también sea autenticada

// Rutas que requieren autenticación
router.get('/:id', auth, deckController.getDeckById)
router.put('/:id', auth, deckController.updateDeck)
router.delete('/:id', auth, deckController.deleteDeck)

export default router
