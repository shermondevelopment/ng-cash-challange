/** supertest */
import supertest from 'supertest'

/** connection with prisma */
import prisma from '../../app/config/prisma'

/** server */
import app from '../../app/config/server'

describe('Signin', () => {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE transactions`
  })

  afterAll(async () => {
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
})
