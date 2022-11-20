import * as Joi from 'joi'

const cashOutSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'Please enter your username'
  }),
  value: Joi.number().required().min(1).messages({
    'string.empty': 'please inform the value',
    'string.min': 'please enter a value equal to 1 or greater'
  })
})

export { cashOutSchema }
