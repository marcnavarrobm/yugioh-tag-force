import { Router } from 'express'

// import all controllers
// import SessionController from './app/controllers/SessionController';
import cardController from '../controllers/cardController.js'

const router = new Router()

router.get('/', cardController.getAllCards)
router.get('/:id', cardController.getCardById)
router.post('/', cardController.createCard)
router.put('/:id', cardController.updateCard)
router.delete('/:id', cardController.deleteCard)
export default router
