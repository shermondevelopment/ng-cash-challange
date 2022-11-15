/** dotenv */
import 'dotenv/config'

/** express */
import express from 'express'

const app = express()

app.listen(process.env.APP_PORT || 5000, () =>
  console.log(`app running in port ${process.env.APP_PORT} 🚀🚀🚀`)
)
