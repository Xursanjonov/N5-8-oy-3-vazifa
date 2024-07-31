import express from 'express'
import cors from 'cors'
import router from './routes/users.js'
import dotEnv from 'dotenv'
dotEnv.config()

const app = express()
app.use(express.json())
app.use(cors())

// app.get('/', (req, res) => {
//     res.json('Server is runnig...')
// })
app.get('/', router)


app.get('/users', (req, res) => {
    res.json({
        users: [{
            id: 1,
            isActive: true,
            fname: "John",
            lname: "Doe",
            username: "johndoe",
            password: "12345678",
            gander: 'Male',
            budget: 0,
            email: "email 1",
            url: "https://thumbs.dreamstime.com/b/laptop-computer-user-icon-vector-isolated-white-person-work-online-pictogram-business-worker-analyst-student-coder-customer-316853739.jpg",
            age: 14
        }]
    })
})
















const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})