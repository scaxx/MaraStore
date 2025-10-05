import cors from 'cors'
import express from 'express'

export const middleware = (app) => {
    app.use(cors())
    app.use(express.json())
}

export default middleware