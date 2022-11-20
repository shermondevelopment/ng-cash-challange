/** prisma */
import prisma from '../../app/config/prisma'

/** bcrypt */
import bcrypt from 'bcrypt'

export const createUser = async (username: string, password: string) => {
  return await prisma.users.create({
    data: {
      username: username,
      password: await bcrypt.hash(password, 12),
      account: {
        create: {}
      }
    }
  })
}

export const signinUser = async () => {
  return await prisma.users.findFirst({
    where: {
      username: 'mockuser'
    }
  })
}
