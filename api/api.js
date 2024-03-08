import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser' // Necesario para parsear el cuerpo de la solicitud
import fs from 'fs'
import sharp from 'sharp' // Importa la biblioteca Sharp

const app = express()
const port = 3001

app.use(bodyParser.json())

app.post('/cards', async (req, res) => {
    try {
        // Recibimos los nombres como un array en la consulta
        let cardNames = req.body.names
        const pack = req.body.pack

        // Verificamos si cardNames es un array; si no, lo convertimos en uno
        if (!Array.isArray(cardNames)) {
            cardNames = [cardNames]
        }

        // Unimos los nombres con '|'
        const joinedNames = cardNames.join('|')

        // Construimos la URL para la API externa
        const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

        // Hacemos la solicitud a la API externa con los parámetros
        const response = await axios.get(apiUrl, {
            params: {
                name: joinedNames
            }
        })

        const cardsData = response.data.data.map(card => {
            delete card.card_sets
            delete card.card_prices
            card.card_images = card.card_images[0]
            return card
        })

        // Guardamos la respuesta de la API en un archivo
        fs.writeFile(`./raw_${pack}.json`, JSON.stringify(cardsData, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err)
                res.status(500).send({ error: 'Error al guardar los datos de las cartas' })
                return
            }
            console.log('Datos de las cartas guardados en cardData.json')
        })

        // Enviamos la respuesta de la API externa al cliente
        res.send(response.data)
    } catch (error) {
        // Manejo de errores
        res.status(500).send({ error: 'Error al obtener la información de las cartas' })
    }
})

// Define una función para convertir una imagen PNG a WebP
async function convertirPNGaWebP(rutaPNG, rutaDestino) {
    await sharp(rutaPNG).webp().toFile(rutaDestino)
}

// Define una ruta en tu servidor para manejar la solicitud de conversión
app.get('/convertir-png-a-webp', async (req, res) => {
    try {
        const rutaPNG = req.query.ruta // Obtén la ruta de la imagen PNG desde la solicitud
        const rutaDestino = 'api/pack/imagen.webp' // Ruta donde deseas guardar la imagen WebP en el servidor
        await convertirPNGaWebP(rutaPNG, rutaDestino) // Convierte la imagen PNG a WebP y guárdala en el servidor
        res.send('Imagen PNG convertida y guardada como WebP en el servidor')
    } catch (error) {
        console.error('Error al convertir y guardar la imagen PNG como WebP:', error)
        res.status(500).send('Error interno del servidor')
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
