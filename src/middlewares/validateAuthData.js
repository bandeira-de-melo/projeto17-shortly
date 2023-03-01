export const validateAuthData = (schema)=>{ 
    return (req, res, next)=>{
         const body = req.body
            const {error, value} = schema.validate(body, {abortEarly: false})
            if(error) res.send(error.details.map(detail => detail.message))
            if(value) {
                res.locals.data = value
            }
            next()
         } 
    }