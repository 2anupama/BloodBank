const express = require("express")
// const URL = require()

const router = express.Router()

router.get('/signup',(request,response)=>{
  return response.render("signup")
})

router.get('/login',(request,response)=>{
  return response.render("login")
})

router.get('/logout',(request,response)=>{
  return response.render("welcome")
})


router.get('/',(request,response)=>{
  return response.render("welcome")
})

module.exports = router