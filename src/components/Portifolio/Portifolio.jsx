import React,{useEffect} from 'react';
import './Portifolio.css';

//import images
import icon1 from '../../Assets/protection.png';
import icon2 from '../../Assets/destination.png';
import icon3 from '../../Assets/customer.png';
import icon4 from '../../Assets/travel.png';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css";   

const Portifolio = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div className='portofolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading" data-aos="fade-up">
            <h3 >
              Why should you choose Us
            </h3>
            <p>
              We have extensive knowladge and experience in the travel industry.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortofolio flex" data-aos="fade-up">
              <div className="iconDiv">
                
                <img src={icon1} alt='icon image' id='imgFill' />
                

              </div>
              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                At our travel agency, we prioritize your safety and well-being above all else. When you choose us for your travel needs, you're not just booking a trip; you're securing peace of mind and 
                unwavering support throughout your journey.
                </p>
              </div>
            </div>

            <div className="singlePortofolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt='icon image' />

              </div>
              <div className="infor">
                <h4>Diverse range of destinations</h4>
                <p>
                "Explore Sri Lanka's rich tapestry of experiences with our diverse range of destinations! From the golden shores of Bentota to the misty hills of Ella, our selection of travel destinations showcases the island's breathtaking beauty and cultural heritage. Wander through ancient cities like Anuradhapura and Polonnaruwa, where history comes alive amidst ancient ruins and sacred temples.
                </p>
              </div>
            </div>
            
            <div className="singlePortofolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt='icon image' />

              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                Experience peace of mind throughout your Sri Lankan journey with our dedicated 24/7 customer support. Whether you have questions about your itinerary, need assistance with bookings, or require immediate help during your travels, our knowledgeable and friendly support team is always here to assist you.

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-up">
          <img src={icon4} alt='Image' />
        </div>
      </div>
      
    </div>
  )
}

export default Portifolio
