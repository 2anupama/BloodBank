const User = require("../Models/user")
const {setUser} = require('../Services/auth')
const bcrypt = require('bcrypt')

async function handleUserSignUp(request,response){
  const {name,email,username,password,dob,accountType} = request.body
  // console.log(request.body)
  try{
    const existingEmail = await User.findOne({email});
    const existingUser = await User.findOne({username})
    if(existingEmail || existingUser){
      return response.status(401).send("Email or Username Already Exists")
    }
    
    const salt = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(password,salt)

    const newUser = await User.create({
      name,
      email,
      username,
      password: securedPassword,
      dob,
      accountType
    })
    return response.status(201).render("login")
  }catch(error){
    console.error(error);
    return response.status(500).send("Internal Server Error")
  }
    // // 
    // await User.create({
    //   firstname,lastname,email,password,address
    // })
    // return response.redirect("/login")
}

async function handleUserLogin(request,response){
  const {email,password} = request.body

  try{

    const user = await User.findOne({email})
    
    if(!user)
      return response.status(401).send("Invalid Username or Password")
    
    
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
      response.status(401).send("Invalid Username or Password")
    }
    
    const token = setUser(user)
    // return response.json({token})
    response.cookie("uid",token)
    response.status(201).redirect("/main")
  }catch(eror){
    console.log("Login Error",eror)
    response.status(500).send("Internal Server Error")
  }
}
async function handleUserLogout(request, response) {
  try {
    response.clearCookie('uid');
    
    response.status(200).redirect('/');
  } catch (error) {
    console.log("Logout Error", error);
    response.status(500).send("Internal Server Error");
  }
}




module.exports = {handleUserSignUp,handleUserLogin} 
