import fs from 'fs'

// Lee el archivo JSON
const rawData = fs.readFileSync('arch_monsters.json')
const data = JSON.parse(rawData)

// Filtra y mapea los datos para obtener solo los objetos con 'archetype'
const filteredData = data.data
    .filter(card => card.archetype) // Solo selecciona cartas con 'archetype'
    .map(card => ({ // Mapea solo los campos 'name' y 'archetype'
        name: card.name,
        archetype: card.archetype
    }))

// Escribe los nuevos datos en un archivo JSON
fs.writeFileSync('new_arch.json', JSON.stringify({ data: filteredData }, null, 2), 'utf8')

console.log('Archivo new_arch.json creado con éxito.')
