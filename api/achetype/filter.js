import fs from 'fs'

// Función para leer y filtrar los datos
async function filterCards() {
    // Lee el archivo data.json
    const rawData = fs.readFileSync('toon.json', 'utf-8')
    const data = JSON.parse(rawData).data

    // Filtra las cartas cuyo nombre termina en 'LV' seguido de números
    const filteredCards = data.map(card => {
        return { name: card.name }
    })

    // Escribe los resultados filtrados en new_data.json
    fs.writeFileSync('new_toon.json', JSON.stringify({ data: filteredCards }, null, 2), 'utf-8')
    console.log('Archivo new_toon.json creado con éxito.')
}

// Llama a la función
filterCards()
