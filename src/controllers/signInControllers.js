import { db } from "../db.connection.js"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'


export const signInController = async (req, res)=>{
    const {email, password} = res.locals.data
 
    try {
        const isUser = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
  
        if (!isUser.rows[0]) {
            return res.status(401).send('Invalid email or password')
        }

        const isMatch = bcrypt.compare(password, isUser.rows[0].password)
        if(!isMatch) {
            return res.status(401).send('Invalid email or password')
        }   
        
        const token = uuidv4()
        await db.query(`INSERT INTO "sessions" ("user_id", "session_token") VALUES ($1, $2)`, [isUser.rows[0].id, token])
        res.status(200).send(token)
    } catch (error) {
        res.status(409).send(error)
    }
    
} 