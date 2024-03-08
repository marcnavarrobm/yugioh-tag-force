const sharp = require('sharp')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

// Ruta de la carpeta donde se guardarán las imágenes WebP
const outputPath = 'public/images/webp/'

// Función para convertir y guardar una imagen en formato WebP
async function convertAndSaveImage(url) {
    try {
        // Obtener la imagen desde la URL
        const response = await axios.get(url, { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data)

        // Configura la calidad de compresión (valor entre 0 y 100)
        const calidad = 80

        // Genera un nombre de archivo para la imagen WebP
        const outputFileName = path.basename(url).replace(/\.[^/.]+$/, '') + '.webp'

        // Ruta de la imagen de salida en formato WebP
        const outputImagePath = path.join(outputPath, outputFileName)

        await sharp(buffer)
            .webp({ quality: calidad }) // Configura la calidad de compresión
            .toFile(outputImagePath)

        return outputImagePath
    } catch (error) {
        console.error('Error al convertir la imagen:', error)
        throw error
    }
}

module.exports = {
    convertImageFromUrl: async (req, res) => {
        try {
            const { imageUrl } = req.body

            if (!imageUrl) {
                return res.status(400).json({ error: 'Debes proporcionar una URL de imagen' })
            }

            const outputImagePath = await convertAndSaveImage(imageUrl)

            res.status(200).json({ message: 'Imagen convertida y guardada exitosamente', imagePath: outputImagePath })
        } catch (error) {
            console.error('Error al convertir y guardar la imagen:', error)
            res.status(500).json({ error: 'Error al convertir y guardar la imagen' })
        }
    }
}
