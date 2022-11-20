import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup'
import SigninController from '../controllers/signin'

/** middleware */
import validationMiddleware from '../middlewares/validation-middleware'

/** schema validation */
import { signupSchema, signinSchema } from '../validations/authValidate'

const routerAuth = Router()

routerAuth.post(
  '/signup',
  validationMiddleware(signupSchema, 'body'),
  SignupController
)
routerAuth.post(
  '/signin',
  validationMiddleware(signinSchema, 'body'),
  SigninController
)

export default routerAuth
