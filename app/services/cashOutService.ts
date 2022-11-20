/** repository */
import { transactionCashIn } from '../repositories/cashOutRepository'
import { findBalance, searchUser } from '../repositories/userRepository'
import { AppError } from '../utils/appError'

type CashInParams = {
  id_cash_out: string
  username: string
  value: number
}

const cashInService = async (cashInParams: CashInParams) => {
  const find_client_cash_in = await searchUser(cashInParams.username)

  if (!find_client_cash_in) {
    return AppError(404, 'receipt account not found')
  }

  const account_cash_out = await findBalance(cashInParams.id_cash_out)
  const account_cash_in = await findBalance(find_client_cash_in.id)

  if (!account_cash_in) {
    return AppError(404, 'balance sender not found')
  }

  if (!account_cash_out) {
    return AppError(404, 'balance addressee not found')
  }

  if (cashInParams.id_cash_out === find_client_cash_in.id) {
    return AppError(400, 'you cannot make this transaction for yourself')
  }

  if (account_cash_out?.account.balance < cashInParams.value) {
    return AppError(
      400,
      'you do not have enough balance to carry out this operation'
    )
  }

  const debitedValueAccount = {
    id: account_cash_out.account.id,
    value: account_cash_out.account.balance - cashInParams.value
  }
  const creditedValueAccount = {
    id: account_cash_in.account.id,
    value: account_cash_in?.account.balance + cashInParams.value
  }

  await transactionCashIn(
    debitedValueAccount,
    creditedValueAccount,
    cashInParams.value
  )
}

export default cashInService
