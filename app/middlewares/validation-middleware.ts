import { NextFunction, Request, Response } from 'express'

/** types */
import { ObjectSchema } from 'joi'

/** utils */
import { AppError } from '../utils/appError'

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      AppError(422, error.details[0]?.message)
    }
    next()
  }
}
