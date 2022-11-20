/** supertes */
import supertest from 'supertest'

/** connection with prisma */
import prisma from '../../app/config/prisma'

/** app */
import app from '../../app/config/server'

/** factorys */
import token from '../factories/token-factory'
import { createUser } from '../factories/user-factory'

let idUser = ''

describe('CashOut', () => {
  beforeAll(async () => {
    const user = await createUser('mockuser', 'Senha@0101')
    idUser = user.id
  })
  afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE transactions`
    await prisma.$executeRaw`TRUNCATE TABLE accounts RESTART IDENTITY CASCADE`
    await prisma.$disconnect()
  })
  it('should call router /cash-out with username empty and receive erro 422', async () => {
    const response = await supertest(app)
      .post('/cash-out')
      .send({
        username: '',
        value: 2
      })
      .set('Authorization', `Bearer ${token(idUser)}`)
    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'Please enter your username' })
  })
  it('should call router /cash-out with value less than 1 and receive error 422', async () => {
    const response = await supertest(app)
      .post('/cash-out')
      .send({
        username: 'mockuser',
        value: 0
      })
      .set('Authorization', `Bearer ${token(idUser)}`)
    expect(response.status).toBe(422)
    expect(response.body).toEqual({
      error: 'please enter a value equal to 1 or greater'
    })
  })
  it('should call router /cash-out with value of type string receive error 422', async () => {
    const response = await supertest(app)
      .post('/cash-out')
      .send({
        username: 'mockuser',
        value: ''
      })
      .set('Authorization', `Bearer ${token(idUser)}`)
    expect(response.status).toBe(422)
    expect(response.body).toEqual({
      error: 'value field and number type'
    })
  })
  it('should call router /cash-out with insufficient value and receive error 400', async () => {
    const user = await createUser('mockuser2', 'Senha@0202')
    const response = await supertest(app)
      .post('/cash-out')
      .send({
        username: 'mockuser',
        value: 200
      })
      .set('Authorization', `Bearer ${token(user.id)}`)
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      error: 'you do not have enough balance to carry out this operation'
    })
  })
  it('should call the router /cash-out with the withdrawal amount for the user himself and get the error 400', async () => {
    const response = await supertest(app)
      .post('/cash-out')
      .send({
        username: 'mockuser',
        value: 100
      })
      .set('Authorization', `Bearer ${token(idUser)}`)
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      error: 'you cannot make this transaction for yourself'
    })
  })
})
