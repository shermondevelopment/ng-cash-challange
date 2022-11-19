import { Request, Response, NextFunction } from 'express'

/** jwt */
import { verify } from 'jsonwebtoken'

/** utils  */
import { AppError } from '../utils/appError'

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  if (!token) {
    return AppError(401, 'providing a token')
  }

  if (token.split(' ')[0] !== 'Bearer') {
    return AppError(401, 'badly formatted token')
  }

  try {
    const decode = verify(token.split(' ')[1], process.env.APP_JWT as string)

    res.locals.user = decode

    next()
  } catch (error) {
    AppError(401, 'invalid or expired token')
  }
}
