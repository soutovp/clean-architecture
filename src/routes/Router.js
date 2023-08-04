import express from 'express'
import jwt from 'jsonwebtoken' //db.jwtSecret
import authenticateToken from '../services/auth.js'
const router = express.Router()

router.get('/inicio', (req, res) => {
	res.send('Parabéns, conseguiu acessar!')
})

export default router