import React from 'react';
import Rotate from 'react-reveal/Rotate';
const Footer = () => {
    return (
     
      <footer class="footer p-10 bg-neutral text-neutral-content mt-[-2px]  mb-[-0px]">
       <Rotate>
        <div className='text-xl'>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div className='text-xl'>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Blogs</a>
        </div> 
        <div className='text-xl'>
          <span class="footer-title">Legal</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        </Rotate> 
        </footer>
       
    );
};

export default Footer;