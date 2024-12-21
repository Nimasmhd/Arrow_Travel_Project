import React,{useEffect} from 'react';
import './Footer.css';
import { BiMagnet } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import image from "../../Assets/client0.jpg";
import img from '../../Assets/logo.png';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css"; 

function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);


  return (
    <div className='footer'>
      <div className="secContainer container grid">
          <div className="logoDiv" data-aos="fade-up">
            <div className="footerLogo">
            <img src={img} alt='logo' />
            
            </div>
            <div className="socials flex">
         
         <ImFacebook  className="icon"/>
         <BsTwitterX  className="icon"/>
         <AiFillInstagram  className="icon"/>
         </div>
          </div>
          
         

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
            <a href='#'>Explore</a>
            </li>
            <li>
            <a href='#'>Travel</a>
            </li>
            <li>
            <a href='#'>Blog</a>
            </li>
          </div>


          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">
              Helpful Links
            </span>
            <li>
              <a href='#'>Destination</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Travel & Condition</a>
              </li>
              <li>
              <a href='#'>Privacy</a>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">Contact Details </span>
            <img src={image} alt='Designer'/>
            <span className="name">Designer: M.R.M Nimas</span>
            <span className="phone">+94 123 456 789</span>
            <span className="email">nimasrfk.off@gmail.com</span>
          </div>
        </div>
      </div>
      
    
  )
}

export default Footer
