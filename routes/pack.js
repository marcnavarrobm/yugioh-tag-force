import { Router } from 'express'

// import all controllers
// import SessionController from './app/controllers/SessionController';
import packController from '../controllers/packController.js'

const router = new Router()

router.get('/', packController.getAllPacks)
router.get('/:id', packController.getPackById)
router.post('/', packController.createPack)
router.put('/:id', packController.updatePack)
router.delete('/:id', packController.deletePack)
export default router
