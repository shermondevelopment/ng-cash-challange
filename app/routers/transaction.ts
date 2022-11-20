import { Router } from 'express'

/** controllers */
import {
  ListTransactionController,
  FilterTransactionController
} from '../controllers/transaction'

/** middleware */
import tokenMiddleware from '../middlewares/token-middleware'
import validationMiddleware from '../middlewares/validation-middleware'
import { filterSchema } from '../validations/filterValidate'

const routerTransaction = Router()

routerTransaction.get(
  '/transactions',
  tokenMiddleware,
  ListTransactionController
)
routerTransaction.get(
  '/transactions/filter',
  tokenMiddleware,
  validationMiddleware(filterSchema, 'query'),
  FilterTransactionController
)

export default routerTransaction
