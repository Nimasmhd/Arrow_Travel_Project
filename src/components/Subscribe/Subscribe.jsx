import React,{useEffect} from 'react';
import './Subscribe.css';
import { MdArrowOutward } from "react-icons/md";

import image from '../../Assets/ladyCalling.png';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css";   

function Subscribe() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
   <div className="subscribe section container">
    <div className="secContainer grid">
      <img src={image} alt='Div Image'data-aos="fade-up" />

      <div className="textDiv">
        <h4 data-aos="fade-up">Best way to start your Journey!</h4>
        <p  data-aos="fade-up">
          We Offer personalized itineraries tilored to indivitual preferences and intrests.
        </p>
        <button className="btn" data-aos="fade-up">Book Now <MdArrowOutward className='icon'/></button>
      </div>
    </div>

   </div>
  )
}

export default Subscribe
