import * as Joi from 'joi'

export const signupSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .message('username must be at least 3 characters long')
    .required()
    .messages({
      'string.empty': 'please enter a username'
    }),
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

export const signinSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'please enter a username'
  }),
  password: Joi.string().messages({
    'string.empty': 'please enter a password'
  })
})
