import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import usersRouter from './routes/users.routes.js'
import urlsRouter from './routes/urls.routes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use([usersRouter, urlsRouter])



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}.`)
})