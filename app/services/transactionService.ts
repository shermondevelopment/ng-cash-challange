/** repository */
import { findAllTransaction } from '../repositories/transactionRepository'
import { findBalance } from '../repositories/userRepository'

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

export { findAllTransactionService }
