import Joi from 'joi'

const signUpSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).email({tlds:{allow: true}}).required(),
    password: Joi.string().alphanum().min(6).required(),
    confirmPassword: Joi.string().alphanum().valid(Joi.ref('password')).required().strict()
})

export default signUpSchema