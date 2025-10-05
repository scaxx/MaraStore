import express from 'express'
import axios from 'axios'

const router = express.Router()

// Ruta de prueba para comprobar que las rutas funcionan
router.get('/status', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' })
})

//Ruta para obtener productos
router.get('/products', async (req,res) => {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        res.json(response.data)
    } catch (error) {
        console.error('Error al obtener productos: ', error.message)
        res.status(500).json({ message: 'No se pudieron obtener los productos' })
    }
})

export default router
