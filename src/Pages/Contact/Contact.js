import React from "react";
import phone from '../../assest/icon/phone.svg'
import emial from '../../assest/icon/email.svg'
import location from '../../assest/icon/location.svg'
 import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Contact = () => {

  const Result=()=>{
    return(
      <p className="text-2xl text-green-600 mt-5">Your messages have been successfull</p>
    )
  }

  const [result,setResult]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s08hh9k', 'template_b788ocd', e.target, 'XmBQScJsejFV8ZNEa')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResult(true);
    };
  
  
  return (
    <div className="mt-32 mb-20 contact_shaddow " id="contact">
      <Fade left>
      <h1 className="text-center text-4xl font-bold mb-16 mt-5">Get In <span className="text-blue-600">Touch</span></h1>
     </Fade>

     <div className="button ml-5" >
              <a className="ml-3 text-lg" href="https://www.facebook.com/suzit.sarkar.39/" target="_blank"><button className="btn_shadow">
              <i class="fab fa-facebook-f"></i>
              </button></a>
              
              <a className="ml-3 text-lg" href="https://www.instagram.com/suzitsarkar5/"target="_blank">
              <button className="btn_shadow">
                <i class="fab fa-instagram"></i>
              </button>
              </a>
            <a className="ml-3 text-lg" href="https://www.linkedin.com/in/devsuzit/"target="_blank">
            <button className="btn_shadow">
                <i class="fab fa-linkedin-in"></i>
            </button></a>
            <a className="ml-3 text-lg" href="https://github.com/suzitsarkar27"target="_blank">
            <button className="btn_shadow">
                <i class="fab fa-github"></i>
            </button></a>
       </div> 
      <div class="card lg:card-side p-10 md:items-center">
        
        <div className="contact-infro w-9/12 md:mb-10">
      <Zoom left>

           <div className="flex gap-10 items-center">
             <div> <img className="h-16" src={phone} alt="" /></div>
             <div>
              <h2 className="text-xl font-medium">Phone</h2>
              <h5 className="text-xl font-medium">01302906374</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-16" src={emial} alt="" /></div>
             <div>
              <h2 className="text-xl font-medium">Email</h2>
              <h5 className="text-xl font-mediumd">suzitsarkar27@gmail.com</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-16" src={location} alt="" /></div>
             <div>
              <h2 className="text-xl font-medium">Locaton</h2>
              <h5 className="text-xl font-medium">Biyanibazar, Sylhet</h5>
           </div> 
        </div>

           
       </Zoom>
        </div>

         <Zoom right>  <form onSubmit={sendEmail}  class="card-body justify-end w-9/12">
          <>
            <div className="lg:flex gap-5">
            <input type="text" name="fullName"  placeholder="Full Name" class="input input-bordered w-full " required/>
            <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full " required/>
            </div>
            <input type="text" name="email" placeholder="Email" class="input input-bordered w-full input_shadow " required/>
            <div>
            {/* <textarea rows="4" cols="50"  name="message" placeholder="Masseges" class="input input-bordered w-full" required />
             */}
            <textarea rows="3" placeholder="Enter text here..." class=" input-bordered w-full input_shadow " cols="40" name="message"  required/> 
            <button className="btn_shadow mt-5 md:d-n ">Send Messages</button>
            </div>
            <div>
               {result ? <Result/> :null}
            </div>
          </>
             </form>
        </Zoom>
      </div>
      <hr className="border-l-4 mt-10" />
    </div>
  );
};

export default Contact;
