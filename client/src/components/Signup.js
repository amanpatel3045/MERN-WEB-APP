import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import { useState } from "react";
const Signup = () => {

const [user,setUser]=useState({
  name:"",email:"",phone:"",work:"",password:"",cpassword:""
});

let name,value;
const handleInputs = (e) =>{
// console.log(e);
name=e.target.name;
value=e.target.value;

setUser({...user, [name]:value});
console.log(user.name);
}

  return (
    <>
     <form >
             
                <label>Name :</label>
                
                <input type="text" name="name" id="name" value={user.name} onChange={handleInputs} autoComplete="off" placeholder="Enter Your Full Name"/>
                <br/>
                <label>Email Id :</label>
                <input type="email" name="email" typeof="email" id="email" value={user.email} onChange={handleInputs} autoComplete="off" placeholder="Enter Your Email"/>
               
                <br/>
                <label>Mobile Number :</label>
                <input type="number" name="number" id="number" value={user.number} onChange={handleInputs} autoComplete="off" placeholder="Enter Your Mobile Number"/>
                <br/>
                <label>Your Profession :</label>
                
                <input type="text" name="profession" id="profession" value={user.profession} onChange={handleInputs} autoComplete="off" placeholder="Enter Your Profession"/>
                <br/>
                <label>Password :</label>
                <input type="password" name="password" id="password" value={user.password} onChange={handleInputs} autoComplete="off" placeholder="Enter Password"/>
                <br/>
                <label>Confirm Password :</label>
                <input type="password" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} autoComplete="off" placeholder="Confirm Your Password"/>
                <br/>
                <input type="submit" id="submitBtn"  value="Create Account"/>
                <br/>
                <NavLink to="/login" >I am already register</NavLink>
            </form>
    </>
  )
};

export default Signup;