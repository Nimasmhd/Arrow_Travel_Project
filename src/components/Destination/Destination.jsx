import React,{useEffect} from 'react';
import './Destination.css';

import { MdLocationOn } from "react-icons/md";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

//import images
import Image1 from '../../Assets/img01.webp';
import Image2 from '../../Assets/img02.webp';
import Image3 from '../../Assets/img03.webp';
import Image4 from '../../Assets/img04.webp';
import Image5 from '../../Assets/img05.jpg';
import Image6 from '../../Assets/img06.jpg';
import Image7 from '../../Assets/img07.jpg';
import Image8 from '../../Assets/img08.webp';
import Image9 from '../../Assets/img09.jpg';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css"; 

//Lets create an array that is gonna contain all destination data and we loop
//through


const destinations = [

  {
    id : 1,
    img: Image1,
    name:'Sigriya',
    location: 'Matale',
    rating: 4.6,
  },
  {              //Im gonna past here others.....
    id : 2,
    img: Image2,
    name:'Udawela National Park',
    location: 'Udawalawe',
    rating: 4.4,
  },
  
  {
    id : 3,
    img: Image3,
    name:'Temple of Tooth',
    location: 'Kandy',
    rating: 4.2,
  },
  
  {
    id : 4,
    img: Image4,
    name:'Gall Fort',
    location: 'Galle',
    rating: 4.5,
  },
  
  {
    id : 5,
    img: Image5,
    name:'Nine Arch Bridge',
    location: 'Ella',
    rating: 4.7,
  },
  
  {
    id : 6,
    img: Image6,
    name:'Golden Temple',
    location: 'Dambulla',
    rating: 4.3,
  },
  
  {
    id : 7,
    img: Image7,
    name:'Nallur Temple',
    location: 'Jaffna',
    rating: 4.5,
  },
  
  {
    id : 8,
    img: Image8,
    name:'Sembuwatte Lake',
    location: 'Matale',
    rating: 4.6,
  },
  {
    id : 9,
    img: Image9,
    name:'Nilaveli Beach',
    location: 'Nilaveli',
    rating: 4.8,
  },
  

  
];

const Destination = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTittle">
          <span className='redText' data-aos="fade-up"> EXPLORE NOW </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid" data-aos="fade-up">
          <div className="inputField flex">
          <MdLocationOn className='icon' />
          <input type="text" placeholder='Location' />
          </div>

          <div className="inputField flex">
          <BsFillCreditCard2BackFill  className='icon' />
          <input type="text" placeholder='Budget' />
          </div>

          <div className="inputField flex">
          <BsFillCalendarDateFill className='icon' />
          <input type="text" placeholder='Date' />
          </div>

          <button className='btn flex'><BiSearchAlt  className='icon'/>Search</button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Nature</li>
            <li>Mountain</li>
            <li>Heritage places</li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          {destinations.map((destination) =>
          {
            return (

          
          <div className="singleDestination" key={destination.id} data-aos="zoom-in">
            <div className="imgDiv" >
              <img src= {destination.img} alt='Desitination place'   />

                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">
                     {destination.name}
                    </span>
                    <p className="flex">
                      <MdLocationOn className='icon'/>
                      {destination.location}
                    </p>
                  </div>
                  <span className="rating">
                  {destination.rating}
                  </span>
                </div>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Destination;
