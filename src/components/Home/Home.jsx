import React, { useEffect, useState } from 'react';
import './Home.css';

import Image1 from '../../Assets/banner/im0.jpg';
import Image4 from '../../Assets/banner/im3.jpg';
import Image6 from '../../Assets/banner/im5.jpg';
import Image7 from '../../Assets/banner/im6.jpg';
import Image8 from '../../Assets/banner/im7.jpg';
import Image9 from '../../Assets/banner/im8.jpg';
import video from '../../Assets/video.mp4';

import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css";   

import { AiOutlineSwapRight, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  const backgrounds = [
    { type: 'video', src: video },
    { type: 'image', src: Image1 },
    { type: 'image', src: Image4 },
    { type: 'image', src: Image6 },
    { type: 'image', src: Image7 },
    { type: 'image', src: Image8 },
    { type: 'image', src: Image9 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + backgrounds.length) % backgrounds.length
    );
  };

  return (
    <div className='Home'>
      <div className="videoBg">
        {backgrounds[currentIndex].type === 'video' ? (
          <video src={backgrounds[currentIndex].src} autoPlay loop muted></video>
        ) : (
          <img src={backgrounds[currentIndex].src} alt="Background" />
        )}
      </div>

      <div className="arrowControls">
        <AiOutlineArrowLeft className="arrow leftArrow" onClick={handlePrev} />
        <AiOutlineArrowRight className="arrow rightArrow" onClick={handleNext} />
      </div>

      <div className="secText">
        <h1 data-aos="fade-up">Discover Sri Lanka: Where Paradise Awaits Your Arrival!</h1>
        <p data-aos="fade-up">"Experience the enchanting allure of Sri Lanka's lush landscapes, ancient temples, and pristine beaches."</p>
        <button className='btn' data-aos="fade-up">
          START YOUR JOURNEY <AiOutlineSwapRight className='icon' />
        </button>
      </div>

      <div className="popularPlaces" data-aos="fade-up">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src={Image1} alt='Destination Images' />
            <img src={Image4} alt='Destination Images' />
            <img src={Image6} alt='Destination Images' />
            <img src={Image7} alt='Destination Images' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
