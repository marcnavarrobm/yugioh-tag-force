import verify from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        // Asume que el token viene en el encabezado 'Authorization' como 'Bearer <token>'
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = verify(token, process.env.JWT_SECRET) // Aquí se usa la línea que mencionaste
        req.user = decoded // Agrega la información del usuario decodificado a la solicitud
        next() // Pasa al siguiente middleware o controlador
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

export default auth
