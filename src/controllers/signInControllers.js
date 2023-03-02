import { db } from "../db.connection.js"
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'


export const signInController = async (req, res)=>{
    const {email, password} = res.locals.data
 
    try {
        const hashedPass = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (!hashedPass.rows[0]) {
            return res.status(401).send('Invalid email or password')
        }

        const isMatch = bcrypt.compare(password, hashedPass.rows[0].password)
        if(!isMatch) {
            return res.status(401).send('Invalid email or password')
        }   
        
        const token = uuidv4()
        res.status(200).send({ token: token })

    } catch (error) {
        res.status(409).send(error)
    }
    
} 