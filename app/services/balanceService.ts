/** repository */
import { findBalance } from '../repositories/userRepository'

/** utils */
import { AppError } from '../utils/appError'

const viewBalanceService = async (id: string) => {
  const balance = await findBalance(id)

  if (!balance) {
    AppError(404, 'balance not found')
  }

  return balance?.account
}

export default viewBalanceService
