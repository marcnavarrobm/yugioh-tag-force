import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import { mergeData } from './merger.js' // Utility function to merge data from different sources
import { updateCodes } from './codes.js' // Utility function to update card codes
import { importCards } from './importer.js' // Utility function to import data into the database

const app = express()
const port = 3001

app.use(bodyParser.json())

// Endpoint to handle card data requests and processing
app.post('/cards', async (req, res) => {
    try {
        let cardNames = req.body.names
        const pack = req.body.pack

        if (!Array.isArray(cardNames)) {
            cardNames = [cardNames]
        }

        const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        const joinedNames = cardNames.join('|')

        const response = await axios.get(apiUrl, { params: { name: joinedNames } })

        let cardsData = response.data.data

        // Process and merge card data
        cardsData = await mergeData(cardsData, pack)
        console.log('cardsData:', cardsData)

        // Update card codes
        cardsData = await updateCodes(cardsData)
        console.log('cardsData:', cardsData)

        // Import cards into the database
        await importCards(cardsData)

        res.send({ success: true, message: 'Cards processed and imported successfully' })
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error processing card data', error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
