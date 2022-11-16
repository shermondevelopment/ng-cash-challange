import { Request, Response } from 'express'
import signinService from '../services/signinService'

const SigninController = async (req: Request, res: Response) => {
  const { username, password } = req.body

  const token = await signinService({ username, password })

  res.status(200).json({ token })
}

export default SigninController
