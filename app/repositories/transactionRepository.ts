import prisma from '../config/prisma'

const findAllTransaction = async (id: string) => {
  return await prisma.transactions.findMany({
    select: {
      id: true,
      value: true,
      created_at: true
    },
    where: {
      OR: [
        {
          creditedAccountId: id
        },
        {
          debitedAccountId: id
        }
      ]
    },
    orderBy: {
      created_at: 'desc'
    }
  })
}

const filterTransactionRepository = async (
  id: string,
  date_transaction: Date,
  cash_type: string
) => {
  return await prisma.transactions.findMany({
    select: {
      id: true,
      value: true,
      created_at: true
    },
    where: {
      AND: [
        {
          ...(cash_type === 'in'
            ? {
                creditedAccountId: id
              }
            : {
                debitedAccountId: id
              })
        },
        {
          created_at: {
            gte: date_transaction || new Date()
          }
        }
      ]
    }
    // orderBy: {
    //   created_at: 'desc'
    // }
  })
}

export { findAllTransaction, filterTransactionRepository }
