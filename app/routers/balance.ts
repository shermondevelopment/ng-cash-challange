import { Router } from 'express'

/** controller */
import ViewBalanceController from '../controllers/balance'

/** middleware */
import validationToken from '../middlewares/token-middleware'

const routerBalance = Router()

routerBalance.get('/balance', validationToken, ViewBalanceController)

export default routerBalance
