/** repository */
import {
  filterTransactionRepository,
  findAllTransaction
} from '../repositories/transactionRepository'
import { findBalance } from '../repositories/userRepository'

/** types */
import { FilterTypes } from '../controllers/transaction'

/** utils */
import { AppError } from '../utils/appError'

const findAllTransactionService = async (id: string) => {
  const findAccount = await findBalance(id)

  if (!findAccount) {
    return AppError(404, 'account not found')
  }

  const searchTransactions = await findAllTransaction(findAccount?.account.id)

  return searchTransactions
}

const filterTransactionService = async (filterTypes: FilterTypes) => {
  const findAccount = await findBalance(filterTypes.id)

  if (!findAccount) {
    return AppError(404, 'account not found')
  }

  const filteredTransactions = filterTransactionRepository(
    findAccount?.account.id,
    new Date(filterTypes.date_transaction || new Date()),
    filterTypes.cash_type
  )

  return filteredTransactions
}

export { findAllTransactionService, filterTransactionService }
