import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <label>Email Id :</label>
        <input type="email" id="email" placeholder="Enter Your Email" />
        <br />
        <label>Password :</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <br/>
                <input type="submit" id="submitBtn" value="Log In"/>
      </form>
    </>
  );
};

export default Login;
