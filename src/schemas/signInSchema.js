import Joi from 'joi'

const signInSchema = Joi.object({
    email: Joi.string().min(6).email({tlds:{allow: true}}).required(),
    password: Joi.string().alphanum().min(6).required()
})

export default signInSchema