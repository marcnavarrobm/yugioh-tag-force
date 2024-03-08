import Genre from '../../models/genre.js' // Asegúrate de tener la ruta correcta al modelo Genre

// Array de datos para crear registros
const genresData = [
    { name: 'Remove card from play', category: 'Destruction', iconUrl: '/images/genres/Remove_card_from_play-genre-GX02.png' },
    { name: 'Destroy Spell/Trap', category: 'Destruction', iconUrl: '/images/genres/Destroy_Spell_Trap-genre-GX02.png' },
    { name: 'Destroy monster', category: 'Destruction', iconUrl: '/images/genres/Destroy_monster-genre-GX02.png' },
    { name: 'Deck destruction', category: 'Destruction', iconUrl: '/images/genres/Deck_destruction-genre-GX02.png' },
    { name: 'Hand destruction', category: 'Destruction', iconUrl: '/images/genres/Hand_destruction-genre-GX02.png' },

    { name: 'LV Monsters', category: 'Monster categories', iconUrl: '/images/genres/LV_Monsters-genre-GX02.png' },
    { name: 'Toon', category: 'Monster categories', iconUrl: '/images/genres/Toon-genre-GX02.png' },
    { name: 'Spirit', category: 'Monster categories', iconUrl: '/images/genres/Spirit-genre-GX02.png' },
    { name: 'Union', category: 'Monster categories', iconUrl: '/images/genres/Union-genre-GX02.png' },
    { name: 'Fusion Material', category: 'Monster categories', iconUrl: '/images/genres/Fusion_Material-genre-GX02.png' },
    { name: 'Token', category: 'Monster categories', iconUrl: '/images/genres/Token-genre-GX02.png' },
    { name: 'Flip Effect', category: 'Monster categories', iconUrl: '/images/genres/Flip_Effect-genre-GX02.png' },

    { name: 'Change card position', category: 'Disruption', iconUrl: '/images/genres/Change_card_position-genre-GX02.png' },
    { name: 'Get control', category: 'Disruption', iconUrl: '/images/genres/Get_control-genre-GX02.png' },
    { name: 'Cancel out Effect', category: 'Disruption', iconUrl: '/images/genres/Cancel_out_Effect-genre-GX02.png' },

    { name: 'Attribute', category: 'Support', iconUrl: '/images/genres/Attribute-genre-GX02.png' },
    { name: 'Type', category: 'Support', iconUrl: '/images/genres/Type-genre-GX02.png' },

    { name: 'Return card', category: 'Hand', iconUrl: '/images/genres/Return_card-genre-GX02.png' },
    { name: 'Increase draw', category: 'Hand', iconUrl: '/images/genres/Increase_draw-genre-GX02.png' },
    { name: 'Search Deck', category: 'Hand', iconUrl: '/images/genres/Search_Deck-genre-GX02.png' },
    { name: 'Recover cards from Graveyard', category: 'Hand', iconUrl: '/images/genres/Recover_cards_from_Graveyard-genre-GX02.png' },

    { name: 'Increase/Decrease ATK/DEF', category: 'Battle', iconUrl: '/images/genres/Increase_Decrease_ATK_DEF-genre-GX02.png' },
    { name: 'Pierce', category: 'Battle', iconUrl: '/images/genres/Pierce-genre-GX02.png' },
    { name: 'Cannot be destroyed', category: 'Battle', iconUrl: '/images/genres/Cannot_be_destroyed-genre-GX02.png' },
    { name: 'Restrict Attack', category: 'Battle', iconUrl: '/images/genres/Restrict_Attack-genre-GX02.png' },
    { name: 'Direct Attack', category: 'Battle', iconUrl: '/images/genres/Direct_Attack-genre-GX02.png' },
    { name: 'Multiple Attack', category: 'Battle', iconUrl: '/images/genres/Multiple_Attack-genre-GX02.png' },

    { name: 'Reduce Life Points', category: 'Life Points', iconUrl: '/images/genres/Reduce_Life_Points-genre-GX02.png' },
    { name: 'Recover Life Points', category: 'Life Points', iconUrl: '/images/genres/Recover_Life_Points-genre-GX02.png' },

    { name: 'Spell Counter', category: 'Items', iconUrl: '/images/genres/Spell_Counter-genre-GX02.png' },
    { name: 'Gamble', category: 'Items', iconUrl: '/images/genres/Gamble-genre-GX02.png' },

    { name: 'Special Summon', category: 'Summoning', iconUrl: '/images/genres/Special_Summon-genre-GX02.png' },
    { name: 'Cannot perform Normal Summon', category: 'Summoning', iconUrl: '/images/genres/Cannot_perform_Normal_Summon-genre-GX02.png' },

    { name: 'Game Original', category: 'Misc', iconUrl: '/images/genres/Game_Original-genre-GX02.png' },
    { name: 'Card with a different artwork', category: 'Misc', iconUrl: '/images/genres/Card_with_a_different_artwork-genre-GX02.png' }
];

// Crear registros en la base de datos
(async () => {
    try {
        // Sincronizar el modelo con la base de datos
        await Genre.sync()

        // Crear registros utilizando el método bulkCreate()
        const createdGenres = await Genre.bulkCreate(genresData)

        console.log('Registros creados con éxito:', createdGenres)
    } catch (error) {
        console.error('Error al crear registros:', error)
    }
})()
