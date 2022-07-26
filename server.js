
const express = require('express')
const { router } = require('./src/api')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use('/', router)


app.listen(port, () => {
  console.log(`demo app listening on port ${port}`)
})
