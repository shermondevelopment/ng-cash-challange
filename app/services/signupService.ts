/** repository */
import { searchUser, createUser } from '../repositories/userRepository'

/** utils */
import { AppError } from '../utils/appError'

interface UserParams {
  username: string
  password: string
}

const signupService = async (user: UserParams) => {
  const findUser = await searchUser(user.username)

  if (findUser) {
    AppError(401, 'username already exists')
  }

  await createUser(user.username, user.password)
}

export default signupService
