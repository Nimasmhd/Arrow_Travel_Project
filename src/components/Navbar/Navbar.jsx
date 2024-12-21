import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';



import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import img from '../../Assets/logo.png';


const Navbar = () => 
{
  //state to track and update navbar
  const [navBar,setNavBar] = useState('menu'); //I use in the place {navBar} 
  // function to show navbar
  const showNavBar = () => 
  {
    setNavBar('menu showNavbar');
  }
  // remove menu bar
  const removeNavBar = () => 
  {
    setNavBar('menu');
  }


  return (
    <div className='navBar'> 
      <div className='logoDiv'>
       <img src={img} alt='logo' />
      </div>

      

      <div className= {navBar}> {/** first i declare 'menu' after screen reduce i declare {navBar} function to hide nav bar */}
        <ul> 
        <li className='nav-list'>
          <Link to="/destinations">Destinations</Link>
          </li>
        <li className='nav-list'>About Us</li>
        <li className='nav-list'>Testimonial</li>
        <li className='nav-list'>Gallery</li>
        </ul>
        {/*Icon to remove nav bar */}

         <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
      </div>
      <button className="signUnBtn btn"> Sign Up </button>
      {/* icon to toggle nav bar again*/}

      <CgMenuGridO className='icon menuIcon' onClick={showNavBar}/>
      
    </div>
  )
}

export default Navbar
