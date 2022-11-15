import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup'

/** middleware */
import validationMiddleware from '../middlewares/validation-middleware'

/** schema validation */
import { signupSchema } from '../validations/authValidate'

const routerAuth = Router()

routerAuth.post('/signup', validationMiddleware(signupSchema), SignupController)

export default routerAuth
