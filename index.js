const express = require('express')
const app = express()
const path=require('path')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{

  // console.log(__filename)
// console.log(__dirname)
  
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

// console.log(path.isAbsolute(__dirname))

// console.log(path.join("folder",'data.json'))
// console.log(path.resolve('demo.txt', 'file.txt'))

res.json("hello there")
})

const port=process.env.PORT
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`)
})