import React from "react";

const Contact = () => {
  return (
<>

<div id="parent">
  <div className="title">Phone</div>
<div className="data">8299115168</div>

<div className="title">Email</div>
<div className="data">amanpatel3045@gmail.com</div>

<div className="title">Address</div>
<div className="data">Kanpur</div>

<div id="footer">
  <div id="title">Get In Touch
  <div>
    <input type="text" id="inp1" placeholder="Your Name" required="true"/>
    <input type="email" id="inp1" placeholder="Your Email" required="true"/>
    <input type="phone" id="inp1" placeholder="Your Contact Number" required="true"/>
    <textarea id="textField" placeholder="Message" rows="10" cols="30"></textarea>
    <button type="submit" className="btn">Send Message</button>
  </div>
  
  </div>
</div>
</div>

</>
  );
};

export default Contact;