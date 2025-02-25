const express = require("express")

const router = express.Router()

router.get('/',(request,response)=>{
  return response.render("dashboard")
})

router.get('/bloodrequest',(request,response)=>{
  return response.render("bloodrequest")
})

router.get('/donation',(request,response)=>{
  return response.render("donation")
})
module.exports = router

 
 
