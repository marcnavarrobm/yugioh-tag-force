const charactersData = [
    {
        name: 'Jaden Yuki',
        tier: 1,
        image: 'https://yugipedia.com/wiki/Jaden_Yuki_(Tag_Force)',
        description: 'The protagonist of Yu-Gi-Oh! GX.',
        gender: 'Male',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Vellian Crowler',
        tier: 2,
        image: 'https://yugipedia.com/wiki/Vellian_Crowler_(Tag_Force)',
        description: 'A student at Duel Academy.',
        gender: 'Male',
        created_at: new Date(),
        updated_at: new Date()
    }
    // Agrega más personajes aquí...
]

Character.bulkCreate(charactersData)
    .then(() => {
        console.log('Personajes creados correctamente')
    })
    .catch((error) => {
        console.error('Error al crear personajes:', error)
    })
