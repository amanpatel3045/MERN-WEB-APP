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
//"tokens.token" => online database (MongoDB) k andr hr ek particular data (like name,email,pass,cpass etc)
//k liye last me tokens: likha hai us pe click krne pe 0:Object the clcik on it
//then u will get token 
//usi token ko get kr rhe hai using "tokens.token"
const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token": token});

//if user nhi hai so it will throw an error
if(!rootUser){throw new Error('User not Found')}

//agr user milta hai so do req.token=token;
req.token=token;
req.rootUser=rootUser;
//database me jo object id hai
req.userID=rootUser._id;

next();


}catch (err){
    //agr manually token ko web page se delete kr de toh bhi jb user about pe click krega toh
    //use about page nhi dikhega 
    //frontend me is case me user ko login page pe redirect kr de rhe hai
    res.status(401).send('Unauthorized: No token provided');
console.log(err);
}
}
module.exports=Authenticate;


// now install npm i cookie-parser
//the check in package.json
//install hone k baad you can check in package.json
//dependencies me bcrypt k niche "cookie-parser" likha hoga
//frontend me jo cookie store hai use backend me send krna hai for that we are using cookie-parser