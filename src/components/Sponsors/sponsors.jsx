import React from "react";
import TypingEffect2 from "../Organizers/typingEffect2";
import "./sponsors.css";
import ddlogo from '../../assets/data_decoders.jpg';
import trademax from '../../assets/trade_max.jpg';

const sponsors = () =>{
    const text = 'Sponsors';
    return (    
        <>
            <div className="Card">
               <h1 className='ubuntu-bold'>Our <TypingEffect2 text={text} speed={50} /></h1>
                 <div className="innercard border-gradient">
                    <a href="#">
                        <img src={ddlogo} alt="" />
                    </a>
                    <a href="#">
                        <img src={trademax} alt="" />
                    </a>
                 </div>
            </div>
        </>


    );
}

export default sponsors;