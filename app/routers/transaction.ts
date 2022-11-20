import { Router } from 'express'

/** controllers */
import ListTransactionController from '../controllers/transaction'

/** middleware */
import tokenMiddleware from '../middlewares/token-middleware'

const routerTransaction = Router()

routerTransaction.get(
  '/transactions',
  tokenMiddleware,
  ListTransactionController
)

export default routerTransaction
