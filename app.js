import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/routes.js'
import corsMiddleware from './middleware/cors.js'
// import User from './models/user.js'
// import { db } from './models/index.js'
import { db, Card, MonsterCard, SpellCard, TrapCard, Deck, Pack, Genre, DeckCard, User } from './models/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class App {
    constructor() {
        this.server = express()
        this.dbConnection()
        this.middlewares()
        this.views()
        this.routes()
    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database online')
            // await db.sync({ force: true })
            // console.log('All models synchronized with database.')
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error.message)
            throw error
        }
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(express.urlencoded({ extended: true }))
        this.server.use(corsMiddleware())
        this.server.use(express.static(path.join(__dirname, 'public')))
    }

    views() {
        this.server.set('views', path.join(__dirname, 'views'))
        this.server.set('view engine', 'ejs')
    }

    routes() {
        this.server.get('/crear-pack', (req, res) => {
            res.render('createPackForm')
        })
        this.server.use(routes)
    }
}

export default new App().server
