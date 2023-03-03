import { db } from "../db.connection.js";

export const validateAuthData = (schema)=>{ 
    return async (req, res, next)=>{

        const authorization = req.headers.authorization
            if(!authorization) return res.sendStatus(422).send("A Bearer token must be sent by authorization in request headers.")
        const token = authorization.replace('Bearer ', '');
            if(!token) return res.sendStatus(422).send("A Bearer token must be sent by request headers.")
        
        try {
            const isValidToken = await db.query(`SELECT * FROM sessions WHERE session_token = $1`, [token])
            if(!isValidToken.rows[0]) return res.status(401).send("Invalid token.")
        } catch (error) {
            res.send(error)
        }
        
        const body = req.body
            const {error, value} = schema.validate(body)
                if(error) return res.send(error.details.map(detail => detail.message))
            
            res.locals.data = {value}
        
            next()
         } 
    }