/** supertest */
import supertest from 'supertest'

/** faker */
import { faker } from '@faker-js/faker'

/** server */
import app from '../../app/config/server'

/** factories */
import token from '../factories/token-factory'

describe('Balance', () => {
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
})
