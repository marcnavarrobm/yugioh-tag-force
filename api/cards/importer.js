import _ from 'lodash'
import { Card, MonsterCard, SpellCard, TrapCard } from '../../models/index.js' // Asegúrate de que las rutas sean correctas

export const importCards = async (cardsData) => {
    const { capitalize } = _
    const limts = { Forbidden: 0, Limited: 1, 'Semi-Limited': 2 }

    for (const item of cardsData) {
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

            // Distinguish and create specific card types based on frameType
            switch (item.frameType) {
                case 'spell':
                    await SpellCard.create({ card_id: newCard.id, type: item.race })
                    break
                case 'trap':
                    await TrapCard.create({ card_id: newCard.id, type: item.race })
                    break
                default: // Assuming default is 'monster' or other types
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
