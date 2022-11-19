import { Router } from 'express'

/** routers */
import routerAuth from './auth'
import routerBalance from './balance'

const routers = Router()

routers.use(routerBalance)
routers.use(routerAuth)

export default routers
