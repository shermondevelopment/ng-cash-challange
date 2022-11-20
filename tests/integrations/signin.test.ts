/** supertest */
import supertest from 'supertest'

/** connection with prisma */
import prisma from '../../app/config/prisma'

/** server */
import app from '../../app/config/server'

/** factorie */
import { createUser } from '../factories/user-factory'

describe('Signin', () => {
  beforeAll(async () => {
    await createUser('mockuser', 'Senha@0101')
  })

  afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE transactions`
    await prisma.$executeRaw`TRUNCATE TABLE accounts RESTART IDENTITY CASCADE`
    await prisma.$disconnect()
  })

  it('should call router /signin how username empty and receive error with status ', async () => {
    const response = await supertest(app).post('/signin').send({
      username: '',
      password: 'Senha@0101'
    })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'please enter a username' })
  })

  it('should call router /signin how password empty and receive error with status ', async () => {
    const response = await supertest(app).post('/signin').send({
      username: 'mockuser',
      password: ''
    })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'please enter a password' })
  })

  it('should call router /signin how username and password valid and receive status 200', async () => {
    const response = await supertest(app).post('/signin').send({
      username: 'mockuser',
      password: 'Senha@0101'
    })

    expect(response.status).toBe(200)
    expect(response.body.token).not.toBeNull()
  })
})
