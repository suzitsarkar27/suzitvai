import React from "react";
import pdf from '../../assest/pdf/_Resume of Developer Suzit.pdf'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";

import logo from "../../assest/pic/SUZIT.png"


const Hearder = ({children}) => {
 
  const menubar=[
    
    <li> <Link smooth to='#home' className="menu_bar " >Home</Link> </li>,
    <li> <Link smooth to='#features' className="menu_bar" >Features</Link></li>,
    <li> <Link smooth to='#portfolio' className="menu_bar" >Portfolio</Link></li>,
    <li> <Link smooth to='#skill' className="menu_bar" >Skill</Link></li>,
    <li> <Link smooth to='#blog' className="menu_bar">Blog</Link> </li>,
    <li> <Link smooth to='#contact' className="menu_bar">Contact</Link> </li>,

    <li class="dropdown dropdown-open dropdown-end hover:text-white">  
           <Link to={pdf} target='_blank' download >
              <label tabindex="0" class="btn_hover btn m-1 rounded-lg btn-primary  ">
                  Download Resume
              </label>
            </Link>   
     </li>,

 ];
 
  return (
   
    
 <div class="drawer drawer-end ">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">

  {/* <!-- Page content here --> */}
   
    <div class="w-full navbar sticky top-0 z-10 box_shodow px-20 py-12 btn-none ">

      <div  class="flex-1 ">
         <img className=" w-44  " src={logo} alt="" />
      </div>
  

      <div class="flex-none lg:hidden">
        <label  for="my-drawer-3" class="btn btn-square btn-ghost ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

      <div class="flex-none hidden  lg:block ">
            <ul class="menu menu-horizontal  gap-3">
            {menubar}
            </ul>
      </div>
    </div> 
    {children}
  </div> 

  <div class="drawer-side  ">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu gap-3 p-4 overflow-y-auto w-80 boxex box_shodow mb-10  mt-24">
          <li className="mb-10">
            <label for="my-drawer-3" class="btn btn-sm btn-circle absolute right-4  ">✕</label>
          </li>
        {menubar}
     </ul>
  </div>
</div> 

  

  );
};

export default Hearder;
