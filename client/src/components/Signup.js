import React from "react";


import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
const Signup = () => {
 const navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log(user.name);
  };

  const PostData = async (e) => {
    e.preventDefault();
    
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
     const data=await res.json();

     if(data.status===422 || !data){
     window.alert("Invalid Registration");
     console.log("invalid registration");
     }else{
      window.alert("Registered");
      console.log("Registered");
    navigate("/login");

       

     }
  };

  return (
    <>
      <form method="POST">
        <div id="formData">
        <label>Name :</label>

        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Enter Your Full Name"
        />
        <br />
        <label>Email Id :</label>
        <input
          type="email"
          name="email"
          typeof="email"
          id="email"
          value={user.email}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Enter Your Email"
        />

        <br />
        <label>Mobile Number :</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Enter Your Mobile Number"
        />
        <br />
        <label>Your Profession :</label>

        <input
          type="text"
          name="work"
          id="work"
          value={user.work}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Enter Your Profession"
        />
        <br />
        <label>Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Enter Password"
        />
        <br />
        <label>Confirm Password :</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={user.cpassword}
          onChange={handleInputs}
          autoComplete="off"
          placeholder="Confirm Your Password"
        />
        <br />
        <input
          type="submit"
          name="submitBtn"
          id="submitBtn"
          value="Create Account"
          onClick={PostData}
        />
        <br />
        <NavLink to="/login">I am already register</NavLink>
        </div>
      </form>
    </>
  );
};

export default Signup;
