import React, { useEffect,useState } from 'react';
import './Quetions.css';
import Accordion from './Accordion';


import Aos from "aos";    //Aos use to scroll effect
import "aos/dist/aos.css"; 


const Quetions = () => {
  const [active, setActive] = useState(
    true
    );
    useEffect(()=>{
      Aos.init({duration: 2000});
    },[]);
  return (
   
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequantly Asked Questions</h3>

      </div>
      <div className="secContainer grid" >
        {/*We will import components*/}
        <div className="accordion grid" data-aos="fade-up">

<Accordion 
          title="How do I choose the right travel destination for me?"
          desc="Choosing the right travel destination involves considering your interests, budget, available time, and preferred season. Research the best times to visit for favorable weather, and ensure the destination is safe and meets any health requirements. "
          active={active}
          setActive={setActive}
          />

<Accordion
          title="What are the best times to visit specific destinations?"
          desc="Whether you seek vibrant festivals, pleasant weather, or fewer crowds, our concise guide offers insights into the best times to visit specific locales, ensuring a memorable journey tailored to your preferences. "
          active={active}
          setActive={setActive}
          />

<Accordion
          title="How can I find budget-friendly travel option and deals?"
          desc="Discovering budget-friendly travel options and deals is easier than ever. Utilize online travel platforms, compare prices across different websites, and sign up for deal alerts from airlinesand booking agencies. "
          active={active}
          setActive={setActive}
          />



        </div>

          <div className="form">
              <div className="secHeading" data-aos="fade-up">
                <h4>Do you have any specific question?</h4>
                <p>
                  Please the form below and our Team will get intouch with you as soon as possible.
                </p>
              </div>
              <div className="formContent grid" >
                <input type='email' placeholder='Enter email address' data-aos="fade-up"/>
                <textarea placeholder='Enter your quetions here' data-aos="fade-up"></textarea>
                <button className='btn' data-aos="fade-up">Submit Inquiry</button>
              </div>
          </div>
        
      </div>
    </div>
  );
};

export default Quetions
