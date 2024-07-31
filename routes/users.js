import express from 'express'
const router = express.Router()
import DATA from '../server.js'
// router.use(express.json())

router.get('/', (req, res) => {
    res.json({ users: DATA.users })
})

export default router