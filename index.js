import express from 'express'
import cors from 'cors'
import router from './routes/users.js'
import dotEnv from 'dotenv'
import mongoose from 'mongoose'
dotEnv.config()

const app = express()
app.use(express.json())
app.use(cors())
// MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB is Connected'))
    .catch(() => console.log('MongoDB is not Connected'))

// Endpoints
app.use('/users', router)


const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})