// importCards.js
import fs from 'fs'
import _ from 'lodash'
import { Card, MonsterCard, SpellCard, TrapCard } from '../models/index.js' // Asegúrate de que las rutas sean correctas
const { capitalize } = _
async function importCards() {
    const data = JSON.parse(fs.readFileSync('./raw_technology_master.json', 'utf8')).data

    const limts = { Forbidden: 0, Limited: 1, 'Semi-Limited': 2 }
    for (const item of data) {
        try {
            const newCard = await Card.create({
                name: item.name,
                description: item.desc,
                archetype: item.archetype ? item.archetype : null, // Comprobación de 'archetype'
                image_url: item.card_images.image_url,
                frame: capitalize(item.frameType),
                limit: item.banlist_info ? limts[item.banlist_info.ban_goat] : 3,
                card_images: item.card_images ? [item.card_images] : [], // Guarda solo el primer objeto de imagen
                pack_id: item.pack_id,
                rarity: item.rarity,
                code: item.code
            })

            if (item.frameType === 'spell') {
                await SpellCard.create({
                    card_id: newCard.id,
                    type: item.race
                })
            } else if (item.frameType === 'trap') {
                await TrapCard.create({
                    card_id: newCard.id,
                    type: item.race
                })
            } else {
                await MonsterCard.create({
                    card_id: newCard.id,
                    atk: item.atk,
                    def: item.def,
                    level: item.level,
                    attribute: item.attribute,
                    race: item.race,
                    effect: item.frameType === 'effect' || item.type.includes('Effect') || (item.frameType === 'fusion' && item.desc.split('\n').length > 1)
                })
            }
        } catch (error) {
            console.error(`Error importing card ${item.name}:`, error)
        }
    }
}

importCards().then(() => console.log('Import completed!')).catch(err => console.error('Import failed:', err))
