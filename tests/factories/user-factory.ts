/** prisma */
import prisma from '../../app/config/prisma'

/** bcrypt */
import bcrypt from 'bcrypt'

export const createUser = async () => {
  await prisma.users.create({
    data: {
      username: 'mockuser',
      password: await bcrypt.hash('Senha@0101', 12),
      account: {
        create: {}
      }
    }
  })
}
