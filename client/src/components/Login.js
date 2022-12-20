import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(e)=>{
e.preventDefault();

const res=await fetch('/signin',{
method:"POST",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({
  email,
  password
})
});
const data=res.json();

if(data.status===400 || !data){
  window.alert('Invalid Credentials');
  console.log('invalid');
}else{
  window.alert('logged in successfully');
  navigate("/");
}


  }
  return (
    <>
      <form method="POST">
        <label>Email Id :</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Your Email" />
        <br />
        <label>Password :</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        <br/>
                <input type="submit" onClick={loginUser} id="submitBtn" value="Log In"/>
      </form>
    </>
  );
};

export default Login;
