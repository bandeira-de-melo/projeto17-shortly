import { db } from "../db.connection.js"
import bcrypt from 'bcrypt'

export const signUpController = async (req, res)=>{
    const {name, email, password} = res.locals.data
    const cryptedPass =  bcrypt.hashSync(password, 10)
    try {
        /* const emailExists =  await db.query(`SELECT email FROM users WHERE email = ${email}`)
        console.log(emailExists) */
        await db.query(`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`, [name, email, password])
        res.status(201).send("Done")
    } catch (error) {
        res.send(error)
    }
    
} 