import { Router } from 'express'

/** routers */
import routerAuth from './auth'

const routers = Router()

routers.use(routerAuth)

export default routers
