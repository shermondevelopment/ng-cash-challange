/** repository */
import { searchUser } from '../repositories/userRepository'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

/** bctypt */
import bcrypt from 'bcrypt'

/** utils */
import { AppError } from '../utils/appError'

interface UserParams {
  username: string
  password: string
}

const signinService = async (user: UserParams) => {
  const findUser = await searchUser(user.username)

  if (!findUser) {
    return AppError(401, 'username not registered')
  }

  if (!(await bcrypt.compare(user.password, findUser.password))) {
    return AppError(401, 'incorrect password')
  }

  const token = jwt.sign({ id: findUser?.id }, process.env.APP_JWT as string, {
    expiresIn: '24h'
  })
  return token
}

export default signinService
