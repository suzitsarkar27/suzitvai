import React, { useState } from 'react';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide'

const ProjectCard = ({project}) => {
   
  const {image,category,totalLike,title,live,client}=project;
    return (
      <>
      <div className='box btn_shadow w-full'>
       <Rotate top left cascade>
        <div className='img'>
          <img src={image} alt=''  />
        </div>
        <div className='category d_flex'>
          <span>{category}</span>
          <label>
            <i className='far fa-heart'></i> {totalLike}
          </label>
        </div>
        <div className='title'>
          <h2>{title}</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <a href={live} target='_blank'>
           <button className='btn_shadow '>
             LIVE SIDE
           </button></a>
          
           <a href={client}>
            <button className='btn_shadow 'target='_blank'>
               CODE LINK
           </button></a>
          
          <button className='btn_shadow 'target='_blank'>
             DETALCE
          </button>
         </div>
        </div>
        </Rotate>  
      </div>

    </>
    );
};

export default ProjectCard;