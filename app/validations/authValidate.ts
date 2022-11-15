import * as Joi from 'joi'

export const signupSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/)
    .required()
    .messages({
      'string.min': 'password must have at least 8 characters',
      'string.empty': 'please enter a password',
      'string.pattern.base':
        'the password must have at least one capital letter and one number'
    })
})
