
const Home=(req,res)=>{
    res.send("home page is the bbay girl")
}


const About=(req,res)=>{
    res.send("About page my baby")
}

const Price=(req,res)=>{
    res.send("Price page ")
}

module.exports={
    Home,About,Price
}