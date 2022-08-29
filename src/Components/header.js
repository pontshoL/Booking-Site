import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import '../CSS/header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { Link } from 'react-router-dom';




function Header({type}){
    
        

        const handleSearch = ()=>{
            // navigate("/hotels", {state:{ destination, date, options }})
           }

    return(
        <div className='header'>
            <div className={type ===  "list" ? "header-container listMode" : "header-container" }>
            <div className='header-list'>
               <div className='header-listItems active'>
               <FontAwesomeIcon icon={faHome} />
               <Link to={`/homepage`}>
               <span className='home'>home</span>
               </Link>
               </div>
               <div className='header-listItems'>
               <FontAwesomeIcon icon={faPlane} />
               <Link to={`/about`}>
               <span className='about'>About Us</span>
               </Link>
               </div>
               <div className='header-listItems'>
               <FontAwesomeIcon icon={faPhone} />
               <Link to={`/contact`}>
               <span>Contact</span>
               </Link>
               </div>
               {/* <div className='header-listItems'>
               <FontAwesomeIcon icon={faTaxi} />
               <span>Airpot Taxis</span>
               </div> */}
               
           </div>
           { type !== "list" &&
            <>
            <h1 className='header-title'>A lifetime discounts? Its Genius.</h1>
               <p className='headerDesc'>
                  Get rewarded for your travels - unlock instant savings of 10% or more
                  with a free Hotel Bliss account
               </p>
               
               
               </>}
            </div>
        
        </div>
    );
};
export default Header;