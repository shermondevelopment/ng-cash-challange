import * as Joi from 'joi'

const cashOutSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'Please enter your username'
  }),
  value: Joi.number().required().min(1).messages({
    'number.base': 'value field and number type',
    'number.min': 'please enter a value equal to 1 or greater'
  })
})

export { cashOutSchema }
