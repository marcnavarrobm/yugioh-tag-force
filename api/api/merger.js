import fs from 'fs'
import util from 'util'

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)

export const mergeData = async (cardsData, pack) => {
    try {
        const data = await readFile('./raitycode.json', 'utf8')
        const json = JSON.parse(data)

        return cardsData.map(card => {
            const matchingCard = json.find(item => item.name === card.name)
            if (matchingCard) {
                return { ...card, code: matchingCard.code, rarity: matchingCard.rarity, pack_id: 'abecdcce-1d95-4749-94bf-224954a8c2c4' }
            }
            return card
        })
    } catch (error) {
        console.error('Error merging data:', error)
    }
}
