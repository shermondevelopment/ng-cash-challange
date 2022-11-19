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

const findBalance = async (id: string) => {
  return await prisma.users.findFirst({
    where: { id },
    select: {
      account: {
        select: {
          balance: true
        }
      }
    }
  })
}

export { searchUser, createUser, findBalance }
