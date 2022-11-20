import { Request, Response } from 'express'

/** transaction service */
import { findAllTransactionService } from '../services/transactionService'

const ListTransactionController = async (req: Request, res: Response) => {
  const { id } = res.locals.user

  const transactions = await findAllTransactionService(id)

  res.status(200).json(transactions)
}

export default ListTransactionController
