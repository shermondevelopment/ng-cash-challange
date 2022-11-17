import bcrypt from 'bcrypt'

import prisma from '../app/config/prisma'

const main = async () => {
  prisma.users.create({
    data: {
      username: 'mockuser',
      password: await bcrypt.hash('Senha@0101', 12),
      account: {
        create: {}
      }
    }
  })
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
