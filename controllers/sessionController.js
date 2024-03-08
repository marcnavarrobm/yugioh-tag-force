import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.js'
dotenv.config()

const { JWT_SECRET } = process.env // Asegúrate de tener definida tu variable de entorno JWT_SECRET

// Función de registro
const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.create({ email, password })
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '24h' })

        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

// Función de inicio de sesión
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: 'Login failed!' })
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '24h' })
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

export { register, login }
