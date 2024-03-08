// /index.js
import app from './app.js' // Asegúrate de que la ruta sea correcta

const PORT = process.env.PORT || 3506

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
