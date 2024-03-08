import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

export const updateCodes = async (cardsData) => {
    try {
        const data = await readFile('./cardData.json', 'utf8')
        const json = JSON.parse(data)
        return cardsData.map(card => {
            if (!card.code) {
                const codigo = Object.keys(json).find(key => json[key] === card.name)
                console.log(card.name + card)
                if (codigo) {
                    card.code = codigo
                }
            }
            return card
        })
    } catch (error) {
        console.error('Error updating codes:', error)
    }
}
