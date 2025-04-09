const express = require('express')
const app = express()
const path=require('path')
require('dotenv').config()

   //built in middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//setting the templete engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,'templetes'))

//routes
app.get('/',(req,res)=>{
const name=req.query.name || "david rai"

  res.render('index',{name,navCom:["home","about","price","categories"]})
// res.json("hello there")
})

const port=process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})