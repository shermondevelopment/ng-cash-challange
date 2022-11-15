import 'express-async-errors'

/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** middleware */
import errorMiddleware from '../middlewares/error-middleware'

/** router */
import router from '../routers'

const app = express()
app.use(json())
app.use(router)
app.use(errorMiddleware)

export default app
