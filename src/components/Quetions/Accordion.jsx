import React,{useEffect} from 'react';
import './Quetions.css';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IoArrowUpCircleOutline } from "react-icons/io5";

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css";   

const Accordion = ({ title, desc, active, setActive }) => {
  const isActive = active === title;
//declare function to set isactive is 
  const toggleAccordion = () => {
    setActive(isActive ? "" : title);
  };

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div className="accordionContainer" data-aos="fade-up">
      
      <div className={`title flex ${isActive ? 'activeTitle' : ''}`} onClick={toggleAccordion}>
        {title}
        {isActive ? (<IoArrowUpCircleOutline className='icon' />):(<IoArrowDownCircleOutline className='icon'/>)}
      </div>
      <p className={`description ${isActive ? 'show' : ''}`}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
