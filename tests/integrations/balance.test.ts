/** supertest */
import supertest from 'supertest'

/** faker */
import { faker } from '@faker-js/faker'

/** connection with prisma */
import prisma from '../../app/config/prisma'

/** server */
import app from '../../app/config/server'

/** factories */
import token from '../factories/token-factory'
import { createUser, signinUser } from '../factories/user-factory'

/** types */
import { Users } from '@prisma/client'

describe('Balance', () => {
  beforeAll(async () => {
    await createUser()
  })

  afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE transactions`
    await prisma.$executeRaw`TRUNCATE TABLE accounts RESTART IDENTITY CASCADE`
    await prisma.$disconnect()
  })
  it('should call router /balance how badly formatted token and receive error 401', async () => {
    const response = await supertest(app)
      .get('/balance')
      .send()
      .set('Authorization', token(faker.datatype.uuid()))
    expect(response.status).toBe(401)
    expect(response.body).toEqual({ error: 'badly formatted token' })
  })
  it('should call router /balance not providing token  and receive error 401', async () => {
    const response = await supertest(app).get('/balance').send()
    expect(response.status).toBe(401)
    expect(response.body).toEqual({ error: 'providing a token' })
  })
  it('should call router /balance how  token valid  and receive status 200', async () => {
    const signin = (await signinUser()) as Users
    const response = await supertest(app)
      .get('/balance')
      .send()
      .set('Authorization', `Bearer ${token(signin.id)}`)
    expect(response.status).toBe(200)
    expect(response.body.token).not.toBeNull()
  })
})
