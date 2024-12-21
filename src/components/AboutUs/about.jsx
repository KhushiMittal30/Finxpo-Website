import React from 'react'
import "./about.css"
import imgg from "../../assets/splatter_bg_aboutus.jpg";
import Organizers from "../Organizers/organizers.jsx";
import Vector1 from "./../../assets/Vector 1.png";
import Vector4 from "./../../assets/Vector 4.png";
import TypingEffect2 from '../Organizers/typingEffect2.jsx';


const about = () => {
    const text = "US"
  return (
    <>
    <div className='Outer'>
              <img className="vectors" src={Vector1} alt="Tl" style={{ left: 150 }} />
        <h1 className='ubuntu-bold'>About <TypingEffect2 text={text} speed={50} /></h1>
        <div className='inner border-gradient'>
            <p>FinXpo 2025 is a groundbreaking 3-day conference that will explore the latest advancements in Web3 and FinTech. Immerse yourself in adynamic ecosystem of industry experts, innovative startups, and cutting-edge technologies shaping the future of finance.</p>
             <div className='points'>
                <div className='geton ubuntu-regular-italic'>
                    <img src= {imgg} alt='image'></img>
                    <div className='aboutuspoints'>
                        <p className='ubuntu-medium-italic' style={{marginBottom:"1px", textDecoration:"underline"}}>3-DAY EVENT</p>
                        <p>FinXpo is a comprehensive 3-day conference packed with insightful keynotes, hands-on workshops, and interactive experiences.</p>
                    </div>
                </div>
                <div className='geton ubuntu-regular-italic'>
                    <img src= {imgg} alt='image'></img>
                    <div className='aboutuspoints'>
                    <p className='ubuntu-medium-italic'style={{marginBottom:"1px", textDecoration:"underline"}}>Web3 and FinTech</p>
                    <p>The event's focus is on the convergence of Web3 technologies and the FinTech industry, exploring the future of finance and payments.</p>
                    </div>
                </div>
                <div className='geton ubuntu-regular-italic'>
                    <img src= {imgg} alt='image'></img>
                    <div className='aboutuspoints'>
                    <p className='ubuntu-medium-italic'style={{marginBottom:"1px", textDecoration:"underline"}}>Cutting-Edge Content</p>
                    <p>Attendees will have the opportunity to dive deep into the latest trends, innovations, and best practices in the Web3 and FinTech spaces.</p>
                    </div>
                </div>
                    
             </div>
        </div>
              <img className="vectors" src={Vector4} alt="Tl" style={{ left: 1050 }} />
    </div>
        <Organizers/>
    </>
  );
}

export default about;
