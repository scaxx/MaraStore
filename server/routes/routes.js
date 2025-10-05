import express from 'express'

const router = express.Router()

// Ruta de prueba para comprobar que las rutas funcionan
router.get('/status', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' })
})

export default router
