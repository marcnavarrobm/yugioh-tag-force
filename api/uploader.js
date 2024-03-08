import sharp from 'sharp'

// Ruta de la imagen de entrada y salida
const inputImagePath = './pack/A_Machines_Soul_Never_Sleeps-Booster-GX02-Localized.png'
const outputImagePath = './pack/A_Machines_Soul_Never_Sleeps-Booster-GX02-Localized.webp'

// Convertir la imagen PNG a WebP
sharp(inputImagePath)
    .toFile(outputImagePath, (err, info) => {
        if (err) {
            console.error('Error al convertir la imagen:', err)
        } else {
            console.log('La imagen se ha convertido exitosamente a WebP:', info)
        }
    })
