import { Router } from 'express'

/** controllers */
import {
  ListTransactionController,
  FilterTransactionController
} from '../controllers/transaction'

/** middleware */
import tokenMiddleware from '../middlewares/token-middleware'

const routerTransaction = Router()

routerTransaction.get(
  '/transactions',
  tokenMiddleware,
  ListTransactionController
)
routerTransaction.get(
  '/transactions/filter',
  tokenMiddleware,
  FilterTransactionController
)

export default routerTransaction
