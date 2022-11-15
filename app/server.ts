import app from './config/server'

app.listen(process.env.APP_PORT || 5000, () =>
  console.log(`app running in port ${process.env.APP_PORT} 🚀🚀🚀`)
)
