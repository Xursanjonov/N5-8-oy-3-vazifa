import express from 'express'
import { User } from '../schema/userSchema.js'
const router = express.Router()
// router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        if (!users.length) {
            return res.status(400).json({
                message: 'Users is not defined',
                variant: 'Warning',
                payload: null,
            })
        }
        res.status(200).json({
            message: 'All Users',
            variant: 'Success',
            payload: users,
        })
    } catch (er) {
        res.status(500).json({
            message: 'Server error',
            variant: 'Error',
            payload: null,
        })
    }
})

export default router