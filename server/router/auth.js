const jwt = require("jsonwebtoken");
const express = require("express");

// backend ka router jo express provide kr rha hai

const router = express.Router();
const bcrypt = require('bcryptjs');

require("../db/conn");
const User = require("../model/userSchema");

// router.get('/',(req,res)=>{
//     res.send(`You are on home page using router js in express`);
// });

//POST DATA USING async await
//Using async await is better than promises
//bcz it reduces lines of code and easy to understand

//register page pe jo bhi data enter kroge wo sb post ho jayega
router.post("/register", async (req, res) => {
  //getting all data using object destructuring
  const { name, email, phone, work, password, cpassword } = req.body;

  //FOR VALIDATION
  // agr koi bhi input filled empty rh gyi like name,email etc
  //to hm ek error show karenge user ko
  //error=> please fill all details.

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all details" });
  }
  try {
    //checking (stored email in db,user's filled email) user is registered or not
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password and Confirm Password is not same" });
    } else {
      //else new user hai toh data ko get kro

      const user = new User({ name, email, phone, work, password, cpassword });
      // data get krne ke baad data ko hash kro for security purpose
      //before saving into database
      //it is not encryption=>isme decrypt kr skte hai but bcrypt me nhi
      //it is bcrypt=>isme decrypt nhi kr skte data ko

      //save method ko call krne se phle we will use pre
      //after save method we will use post
      //hashing wala code userSchema.js me hai

      // then user data ko Mongodb ke collection me save kr do
      await user.save();
      //after saving in collection
      //res.status 201 dekar message show kr do
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//LOGIN ROUTE
//POST DATA OF LOGIN CREDENTIALS

router.post("/signin", async (req, res) => {
  try {
    //user ne jo login input me jo fill kiya
    //wo hm get kr rhe hai using destructuring
    const { email, password } = req.body;
    //checking koi filled empty toh nhi hai
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }
    //dono filled empty nhi hai
    //then database k data se login data ka match krenge
    //database ka data get krne k liye User collection ka use krenge
    //User ko already require kiya hai in above code
    //User.findOne({database ka email, email entered by user during login})
    //User.findOne will return promises
//User.findOne()=>mongoose ka method hai
    const userLogin = await User.findOne({ email, email });
if(userLogin){
  //bcrypt.compare(input password,stored password)=> checking both password 
//user entered and password and jo database me stored password hai

  const isMatch = await bcrypt.compare(password,userLogin.password);
  const token = await userLogin.generateAuthToken();
  //generateAuthToken() is defined in userSchema.js file
  console.log(token);
//cookie me jwtoken ke name se token will store
res.cookie("jwtoken",token,{
  //eg=>session expired means kitne minute ke baad user ko logout kra dena hai
  //25892000000 ms
  //user login k date se 30 din baad session expire ho jayega
  expires:new Date(Date.now() + 25892000000),
  //taaki http pe bhi chale agr yeh ( httpOnly) nhi likhte toh only secure pe chalta. 
  httpOnly:true
});




  if (!isMatch) {
    res.status(400).json({ error: "invalid credential pass" });
  } else {
    res.json({ message: "signin successfully" });
  }
}else{
  res.status(400).json({ error: "invalid credential" });
}


    // console.log(userLogin);
//useLogin me database ka pura data hai like name,email,work,password,cpass...etc.

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
