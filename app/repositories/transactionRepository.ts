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

export { findAllTransaction }
