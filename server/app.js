import express from 'express'
import dotenv from 'dotenv'
import router from './routes/routes.js'
import middleware from './middleware/middlewares.js'

dotenv.config()

const app = express ()

//Middlewares
middleware(app)


//Ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente')
})

//Rutas principales
app.use('/api', router)

export default app