/** prisma */
import prisma from '../config/prisma'

export const findBalance = async (id: string) => {
  return await prisma.accounts.findFirst({
    where: { id },
    select: {
      user: {}
    }
  })
}
