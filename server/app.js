const mongoose = require("mongoose");
const express = require("express");
// app k andr express ke sare functions and properties aa chuke hai bcz const app=express() likha hai
const app = express();

//online database (mongodb) banane k liye
//step1=>mongodb atlas(on browser) me register krke login kro
//then new project create krke
//then new cluster
//then database ka name
//then connectivity k liye DB me jo url hai use copy krna thaa.
const DB =
  "mongodb+srv://amankp12:Golukp12*@cluster0.1gmtdkm.mongodb.net/mernstack?retryWrites=true&w=majority";

//monggose.connect(DB) => promise return karega isiliye .then use kr rhe
// connection successfull na aaye toh
//given code .connect(DB k baad comma lga kr likh dena)
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// }
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection"));

//MIDDLEWARE

const middleware = (req, res, next) => {
  // next parameter means=> middleware ka kaam ho jane k baad next jo bhi hai wo kaam shuru kr do
  console.log(`I am Middleware`);
  next();
};

//bellow line home page ko represent karega
app.get("/", (req, res) => {
  //res.send me jo likha hai wo home page pe show hoga
  res.send(`Hello world from the server, you are on Home Page`);
});

//MIDDLEWARE=> user about page ko jb bhi access karega yaa about icon pe click karega toh
//Middleare check karega ki user logged in hai ya nhi agr user already loggedin hai
//toh wo about page ko access karega agr user new hai ya loggedin nhi hai
//toh use signup yaa login page pe redirect kr denge
//then user signup/login krne k baad about page access kr skta hai but usme keval particular user
//jo user login kr rha hai usi ki details about page me dikhegi na ki dusre ki details
//that's why yeh ek middle ki trh work kr rha hai

//ALL PAGES =>HOME,ABOUT,CONTACT,SIGNIN,SIGNUP KO BACKEND KI HELP SE CREATE KRO...
// now about page ke liye app.get likho
app.get("/about", middleware, (req, res) => {
  console.log(`after executing middleware`);
  res.send(`You are on about page`);
});

//now contact page k liye app.get likho taaki user /contact pe jaye toh use mera
//res.get me jp likha hai wo dikhe

app.get("/contact", (req, res) => {
  res.send(`You are on contact page`);
});

//now signin page ke liye
app.get("/signin", (req, res) => {
  res.send(`You are on sign in page`);
});

//now signup page ke liye
app.get("/signup", (req, res) => {
  res.send(`You are on signup page`);
});

// now server ko btaao ki user / wale page pe visit kr rha hai
//toh iske liye app.listen use kr rha

app.listen(3000, () => {
  console.log("server is running at port number 3000");
});
