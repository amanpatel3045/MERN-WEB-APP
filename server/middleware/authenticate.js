const jwt = require("jsonwebtoken");
const User=require("../model/userSchema");
const Authenticate=async(req,res,next)=>{
try{
    //getting token
const token=req.cookies.jwtoken;
//then token ko verify krenge
//token ko secret key k sath compare kr rhe
const verifyToken=req.jwt.verify(token,process.env.SECRET_KEY)
//verifyToken k andr user ka pura data aa chuka hai
//rootUser me user ki id se cookie me stored token ko match (compare) krenge ki is there any user exist or not
const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token": token});

//if user nhi hai so it will throw an error
if(!rootUser){throw new Error('User not Found')}

//agr user milta hai so do req.token=token;
req.token=token;
req.rootUser=rootUser;
//database me jo object id hai
req.userID=rootUser._id;

next();


}catch(err){
    res.status(401).send('Unauthorized: No token provided');
console.log(err);
}
}
module.exports=Authenticate;


// SECRET_KEY=MYNAMEISAMANKUMARPATELIAMAFULLSTACKWEBDEVELOPER