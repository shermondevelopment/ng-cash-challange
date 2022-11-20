import { Router } from 'express'

/** controller */
import CashInController from '../controllers/cash'

/** middlewares */
import tokenMiddleware from '../middlewares/token-middleware'
import validationMiddleware from '../middlewares/validation-middleware'

/** validation */
import { cashOutSchema } from '../validations/cashOutValidate'

const routerCashOut = Router()

routerCashOut.post(
  '/cash-out',
  tokenMiddleware,
  validationMiddleware(cashOutSchema, 'body'),
  CashInController
)

export default routerCashOut
