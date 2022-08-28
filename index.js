const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()
const server = app.listen(PORT, () => {
   console.log('Server is running on port', server.address().port)
})
