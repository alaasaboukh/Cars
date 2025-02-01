import "./contact.scss";
import { useState } from "react";

function Contact() {
    const [value,setvalue] = useState({fullname:"", email:"", message:""})
    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <h1>Contact Form</h1>
                <form action="">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Enter your name" value={value.fullname} 
                    onChange={(e)=>setvalue({...value, fullname: e.target.value})} />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Enter your email" value={value.email} 
                    onChange={(e)=>setvalue({...value, email: e.target.value})} />

                    <label htmlFor="message">Your Message</label>
                    <textarea placeholder="Enter your message" value={value.message} 
                    onChange={(e)=>setvalue({...value,message:e.target.value})}/>

                    <button type="submit" onClick={(e) => e.preventDefault()}>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
