import { Request, Response } from 'express'

export type FilterTypes = {
  id: string
  date_transaction: string
  cash_type: string
}

/** transaction service */
import {
  filterTransactionService,
  findAllTransactionService
} from '../services/transactionService'

const ListTransactionController = async (req: Request, res: Response) => {
  const { id } = res.locals.user

  const transactions = await findAllTransactionService(id)

  res.status(200).json(transactions)
}

const FilterTransactionController = async (req: Request, res: Response) => {
  const { id } = res.locals.user
  const { date_transaction, cash_type } = req.query

  const filterTransactions = await filterTransactionService({
    id,
    date_transaction: date_transaction as string,
    cash_type: (cash_type as string) || 'in'
  })

  res.status(200).json(filterTransactions)
}

export { ListTransactionController, FilterTransactionController }
