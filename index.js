const express = require('express')
const app = express()
const port = 1111   
const router=require('./routes/userRoutes.js')

//using the routes router for the better maintainance of the routes
app.use('/api',router)

app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`)
})
// sadasd