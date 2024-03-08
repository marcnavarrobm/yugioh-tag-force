import { Pack } from '../../models/index.js'
import fs from 'fs'

async function addPackToDatabase(packData) {
    try {
        // Crea el pack en la base de datos
        const newPack = await Pack.create({
            name: packData.name,
            cost: packData.cost,
            unlock: packData.unlock,
            image: packData.image
        })

        console.log('Pack creado:', newPack.toJSON())
    } catch (error) {
        console.error('Error al añadir el pack a la base de datos:', error)
    }
}

// Lee los datos de los packs desde el archivo JSON
fs.readFile('./pack.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err)
        return
    }
    const packs = JSON.parse(data)
    packs.forEach(packData => {
        addPackToDatabase(packData)
    })
})
