import jwt from 'jsonwebtoken'

const token = (id: string): string => {
  return jwt.sign({ id }, process.env.APP_JWT as string)
}

export default token
