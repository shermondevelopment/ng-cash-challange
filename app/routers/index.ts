import { Router } from 'express'

/** routers */
import routerAuth from './auth'
import routerBalance from './balance'
import routerCashOut from './cashOut'
import routerTransaction from './transaction'

const routers = Router()

routers.use(routerBalance)
routers.use(routerAuth)
routers.use(routerCashOut)
routerAuth.use(routerTransaction)

export default routers
