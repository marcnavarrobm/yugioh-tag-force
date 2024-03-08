import { Router } from 'express'

import cardRouter from './card.js'
import packRouter from './pack.js'
import deckRouter from './deck.js'

import { register, login } from '../controllers/sessionController.js'

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router()

router.post('/register', register)
router.get('/register', (req, res) => {
    res.render('registerForm')
})
router.post('/login', login)
// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('loginForm')
})

router.use('/cards', cardRouter)
router.use('/pack', packRouter)
router.use('/deck', deckRouter)

export default router
