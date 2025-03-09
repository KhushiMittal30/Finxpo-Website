import React from 'react'
import "../../App.css"
import "./organizers.css";
import TypingEffect2 from './typingEffect2';
import numerateslogo from "../../assets/numerates.png"
import ddlogo from '../../assets/data_decoders.jpg';
import trademax from "../../assets/trade_max.jpg";
import Vector3 from "./../../assets/Vector 4.png";



const speakers = () => {
  const text = "ORGANIZERS";

  return (
    <div className='Outer'>
    <h3 className='ubuntu-bold' style={{fontSize:"50px"}}> MEET THE <TypingEffect2 text={text} speed={50} /></h3>
     <div className='border-gradient' style={{width:"950px"}}>
      <img style={{height:"500px", width:"500px",alignItems:"center", position:"relative", left:"24%"}} src={numerateslogo} alt="numlogo" />
    <div className='innerr'>
    <img  src={ddlogo} alt="numlogo" />
    <img  src={trademax} alt="numlogo" />
    {/* <img  src={ddlogo} alt="numlogo" /> */}
    {/* <img  src={trademax} alt="numlogo" /> */}

    </div>
    </div>
    
    </div>
  )
}

export default speakers
