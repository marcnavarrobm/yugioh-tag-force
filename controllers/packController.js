import { Pack } from '../models/index.js' // Asegúrate de que la ruta al modelo sea correcta
import { validatePack, validatePartialPack } from '../schemas/packs.js' // Asegúrate de que la ruta sea correcta

class PackController {
    // Obtener todos los sobres
    async getAllPacks(req, res) {
        try {
            const packs = await Pack.findAll()
            res.json(packs)
        } catch (error) {
            res.status(500).send('Error al obtener los sobres: ' + error.message)
        }
    }

    // Obtener un sobre por ID
    async getPackById(req, res) {
        try {
            const pack = await Pack.findByPk(req.params.id)
            if (pack) {
                res.json(pack)
            } else {
                res.status(404).send('Sobre no encontrado')
            }
        } catch (error) {
            res.status(500).send('Error al obtener el sobre: ' + error.message)
        }
    }

    // Crear un nuevo sobre
    async createPack(req, res) {
        const { success, data, error } = validatePack(req.body)
        if (!success) {
            return res.status(400).json({ error: error.errors })
        }
        try {
            const newPack = await Pack.create(data) // Usa datos validados
            res.status(201).json(newPack)
        } catch (error) {
            res.status(500).send('Error al crear el sobre: ' + error.message)
        }
    }

    // Actualizar un sobre
    async updatePack(req, res) {
        const { success, data, error } = validatePartialPack(req.body)
        if (!success) {
            return res.status(400).json({ error: error.errors })
        }
        try {
            const { id } = req.params

            const updated = await Pack.update(data, { // Usa datos validados
                where: { id }
            })
            if (updated[0]) {
                res.send('Sobre actualizado')
            } else {
                res.status(404).send('Sobre no encontrado')
            }
        } catch (error) {
            res.status(500).send('Error al actualizar el sobre: ' + error.message)
        }
    }

    // Eliminar un sobre
    async deletePack(req, res) {
        try {
            const deleted = await Pack.destroy({
                where: { id: req.params.id }
            })
            if (deleted) {
                res.send('Sobre eliminado')
            } else {
                res.status(404).send('Sobre no encontrado')
            }
        } catch (error) {
            res.status(500).send('Error al eliminar el sobre: ' + error.message)
        }
    }
}

export default new PackController()
