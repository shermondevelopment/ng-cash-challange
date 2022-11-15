import prisma from '../config/prisma'

const searchUser = async (username: string) => {
  return await prisma.users.findFirst({
    where: {
      username
    }
  })
}

const createUser = async (username: string, password: string) => {
  await prisma.users.create({
    data: {
      username,
      password,
      account: {
        create: {}
      }
    }
  })
}

export { searchUser, createUser }
