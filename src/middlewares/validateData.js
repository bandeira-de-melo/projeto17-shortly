export const validateData = (schema)=>{ 
    return (req, res, next)=>{
         const body = req.body
            const {error, value} = schema.validate(body, {abortEarly: false})
            if(error) return res.status(422).send(error.details.map(detail => detail.message))
            if(value) {
                res.locals.data = value
            }
            next()
         } 
    }
