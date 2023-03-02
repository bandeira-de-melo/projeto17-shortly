import { db } from "../db.connection.js"
import bcrypt from 'bcrypt'


export const signUpController = async (req, res)=>{
    const {name, email, password} = res.locals.data
    const cryptedPass =  bcrypt.hashSync(password, 10)
    try {
        await db.query(`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`, [name, email, cryptedPass])
        res.status(201).send("user added successfully")
    } catch (error) {
        res.status(409).send(error.detail)
    }
    
} 