import { Router } from 'express'

/** routers */
import routerAuth from './auth'
import routerBalance from './balance'
import routerCashOut from './cashOut'

const routers = Router()

routers.use(routerBalance)
routers.use(routerAuth)
routers.use(routerCashOut)

export default routers
