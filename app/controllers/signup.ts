import { Request, Response } from 'express'

/** service */
import signupService from '../services/signupService'

const SignupController = async (req: Request, res: Response) => {
  const { username, password } = req.body
  await signupService({ username, password })

  res.sendStatus(201)
}

export default SignupController
