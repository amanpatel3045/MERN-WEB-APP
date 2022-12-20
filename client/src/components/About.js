import React from "react";

const About = () => {
  return (
    <>
     <form  method="">
    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="image"/>
    <h5>Aman</h5>
    <h6>Full Stack Web Developer</h6>
    <p>RANKINGS:<span>1/10
      </span></p>
<ul>
  <li>
    <a id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
  </li>
  <li>
  <a id="profile-tab" data-toggle="tab" href="#home" role="tab">Timeline</a>
  </li>
</ul>
<div className="col-md-2">
<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit-Profile" />
</div>
<div>
  <p>WORK LINK</p>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://www.linkedin.com/in/aman-kumar-patel-540a47169/" alt="LinkedIn-Profile" target="_blank">LinkedIn</a>
  <br/>
  <a href="https://sde-amanpatel.netlify.app/" alt="LinkedIn-Profile" target="_blank">Portfolio</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
  <br/>
  <a href="https://github.com/amanpatel3045" alt="LinkedIn-Profile" target="_blank">Github</a>
 
</div>
<div className="about-details">
  <div id="home">
    <label>User ID</label>
    <p>12345678</p>
    <label>Name</label>
    <p>Aman</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
    <label>User ID</label>
    <p>12345678</p>
  </div>

</div>
     </form>
    </>
  )
};

export default About;