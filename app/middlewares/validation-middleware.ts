import { NextFunction, Request, Response } from 'express'

/** types */
import { ObjectSchema } from 'joi'

/** utils */
import { AppError } from '../utils/appError'

type validateObject = 'body' | 'query'

export default (schema: ObjectSchema, filter: validateObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[filter], { abortEarly: false })
    if (error) {
      AppError(422, error.details[0]?.message)
    }
    next()
  }
}
