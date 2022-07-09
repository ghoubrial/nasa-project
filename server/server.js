const express = require('express')

const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to NASA project API')
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}\n` +
    `press CTRL+C to terminate`)
})
