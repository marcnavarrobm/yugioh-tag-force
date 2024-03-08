import fs from 'fs'

// Carga y analiza los archivos JSON
const newCountRawData = fs.readFileSync('new_count.json', 'utf-8')
const newCountData = JSON.parse(newCountRawData).data
const archetypesRawData = fs.readFileSync('archetypes.json', 'utf-8')
const archetypesData = JSON.parse(archetypesRawData).Archetypes

// Convierte los nombres de los arquetipos a minúsculas para la comparación
const newCountSet = new Set(newCountData.map(item => item.name.toLowerCase()))
const archetypesSet = new Set(archetypesData.map(name => name.toLowerCase()))

// Encuentra arquetipos en new_count.json que no están en archetypes.json
const notInArchetypes = [...newCountSet].filter(name => !archetypesSet.has(name)).sort()
console.log('Arquetipos en new_count.json que no están en archetypes.json:', notInArchetypes)

// Encuentra arquetipos en archetypes.json que no están en new_count.json
const notInNewCount = [...archetypesSet].filter(name => !newCountSet.has(name)).sort()
console.log('Arquetipos en archetypes.json que no están en new_count.json:', notInNewCount)
