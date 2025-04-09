const express=require("express")
const {Home,About,Price}=require("../controller/userControllers.js")

const router=express.Router()

router.get('/',Home)
router.get('/about',About)
router.get('/price',Price)

module.exports=router