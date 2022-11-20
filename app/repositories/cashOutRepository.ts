import prisma from '../config/prisma'

type TransactionCashOut = {
  value: number
  id: string
}

type transactionCashIn = {
  value: number
  id: string
}

const transactionCashIn = async (
  transactionCashOut: TransactionCashOut,
  transactionCashIn: transactionCashIn,
  valueCashOut: number
) => {
  await prisma.$transaction([
    prisma.accounts.update({
      data: {
        balance: transactionCashOut.value
      },
      where: {
        id: transactionCashOut.id
      }
    }),
    prisma.accounts.update({
      data: {
        balance: transactionCashIn.value
      },
      where: {
        id: transactionCashIn.id
      }
    }),
    prisma.transactions.create({
      data: {
        creditedAccountId: transactionCashIn.id,
        debitedAccountId: transactionCashOut.id,
        value: valueCashOut
      }
    })
  ])
}

export { transactionCashIn }
