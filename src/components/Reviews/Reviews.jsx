import React,{useEffect} from 'react';
import './Reviews.css';
//import icon link from react-icons
import { FaStar } from "react-icons/fa";

import image1 from '../../Assets/client0.jpg';
import image2 from '../../Assets/client1.jpg';
import image3 from '../../Assets/client2.jpg';
import image4 from '../../Assets/client3.jpeg';
import image5 from '../../Assets/client4.webp';
import image6 from '../../Assets/reviewimg.webp';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css"; 

function Reviews() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv" data-aos="fade-up">
          <span className="redText">
              FROM OUR CLIENT
          </span>
          <h3>
            Real Travel History From Our Beloved Clients
          </h3>
          <p>
          "Discover the magic of travel through the eyes of our beloved clients. Read real travel histories filled with unforgettable experiences, breathtaking destinations, and heartfelt moments. Let their journeys inspire your next adventure and see why our travelers keep coming back for more."

          </p>
          <span className="star flex">
          <FaStar className='icon' />
          <FaStar className='icon' />
          <FaStar className='icon' />
          <FaStar className='icon' />
          <FaStar className='icon' />
          </span>

          <div className="clientsImages flex">
              <img src={image1} alt='Client image' />
              <img src={image2} alt='Client image' />
              <img src={image3} alt='Client image' />
              <img src={image4} alt='Client image' />
              <img src={image5} alt='Client image' />
          </div>
        </div>
        <div className='imgDiv' data-aos="fade-left">
        <img src={image6} alt='Client image' />

        </div>
      </div>
    </div>
  )
}

export default Reviews
