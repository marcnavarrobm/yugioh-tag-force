import fs from 'fs'

// Lee el archivo JSON
const rawData = fs.readFileSync('new_arch.json', 'utf-8')
const data = JSON.parse(rawData)

// Inicializa un objeto para contar los arquetipos y almacenar los nombres
const archetypes = {}

// Itera sobre cada carta, cuenta los arquetipos y guarda los nombres
for (const card of data.data) {
    if (card.archetype) { // Asegúrate de que la carta tenga un arquetipo
        if (!archetypes[card.archetype]) {
            archetypes[card.archetype] = { count: 0, names: [] }
        }
        archetypes[card.archetype].count++
        archetypes[card.archetype].names.push(card.name)
    }
}

// Convertir el objeto archetypes a un array y ordenarlo de mayor a menor según el recuento
const sortedArchetypes = Object.entries(archetypes).map(([name, info]) => ({
    name,
    count: info.count
})).sort((a, b) => b.count - a.count)

fs.writeFileSync('new_count.json', JSON.stringify({ data: sortedArchetypes }, null, 2), 'utf8')
