import { Router } from 'express'

/** controllers */
import SignupController from '../controllers/signup'

const routerAuth = Router()

routerAuth.post('/signup', SignupController)

export default routerAuth
