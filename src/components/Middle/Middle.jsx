import React, {useEffect} from 'react';
import './Middle.css';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css";  

const Middle = () =>{

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return<div className='middle section' >
      <div className="secContainer container">
        <div className="grid" >
        <span className='flex' data-aos="zoom-in">
          <h1>10</h1>
          <p>Visiting Places</p>
        </span>

        <span className='flex' data-aos="zoom-in">
          <h1>1K+</h1>
          <p>Destinations</p>
        </span>

        <span className='flex' data-aos="zoom-in">
          <h1>10K+</h1>
          <p>Reviews</p>
        </span>

        <span className='flex' data-aos="zoom-in">
          <h1>3.9</h1>
          <p>Overall Ratting</p>
        </span>
        </div>

      </div>
    </div>
  
}

export default Middle
