/** faker */
import { faker } from '@faker-js/faker'

/** supertest */
import supertest from 'supertest'

/** server */
import app from '../../app/config/server'

describe('Signup', () => {
  it('should call router /signup how username empty and receive error with status 422', async () => {
    const response = await supertest(app)
      .post('/signup')
      .send({
        username: '',
        password: faker.internet.password(8)
      })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({ error: 'please enter a username' })
  })
  it('should call router/signup as username less than 3 characters and get error with status 422', async () => {
    const response = await supertest(app)
      .post('/signup')
      .send({
        username: faker.name.firstName().substring(0, 2),
        password: faker.internet.password(8)
      })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({
      error: 'username must be at least 3 characters long'
    })
  })
  it('should call the router/signup with empty password and receive an error with status 422', async () => {
    const response = await supertest(app).post('/signup').send({
      username: faker.name.firstName().toLocaleLowerCase(),
      password: ''
    })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({
      error: 'please enter a password'
    })
  })
  it('should call router/signup as password less than 8 characters and get error with status 422', async () => {
    const response = await supertest(app)
      .post('/signup')
      .send({
        username: faker.name.firstName(),
        password: faker.internet.password(8).substring(0, 7)
      })

    expect(response.status).toBe(422)
    expect(response.body).toEqual({
      error: 'password must have at least 8 characters'
    })
  })
})
