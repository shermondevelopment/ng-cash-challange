import * as Joi from 'joi'

const filterSchema = Joi.object({
  date_transaction: Joi.date(),
  cash_type: Joi.string().valid('in', 'out').required()
})

export { filterSchema }
