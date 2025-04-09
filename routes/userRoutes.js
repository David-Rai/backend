const express=require("express")
const {Home,About}=require("../controller/userControllers.js")

const router=express.Router()

router.get('/',Home)
router.get('/about',About)

module.exports=router