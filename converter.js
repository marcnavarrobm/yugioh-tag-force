import fs from 'fs/promises'
import path, { dirname } from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function convertirDirectorioPNGaWebP(directorio) {
    try {
        const archivos = await fs.readdir(directorio)
        for (const archivo of archivos) {
            if (path.extname(archivo).toLowerCase() === '.png') {
                const rutaPNG = path.join(directorio, archivo)
                const nombreBase = path.basename(archivo, '.png')
                const rutaWebP = path.join(directorio, `${nombreBase}.webp`)
                await sharp(rutaPNG).webp().toFile(rutaWebP)
                console.log(`Convertido: ${rutaPNG} a ${rutaWebP}`)
            }
        }
    } catch (error) {
        console.error('Error al convertir las imágenes:', error)
    }
}

const directorioDeImagenesPNG = path.join(__dirname, 'public/images/races')
convertirDirectorioPNGaWebP(directorioDeImagenesPNG)
