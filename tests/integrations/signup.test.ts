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
})
