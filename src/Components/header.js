import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faHome, faPerson, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import React,{useState, useEffect} from 'react';
import { auth} from '../Config/firebase';
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import '../CSS/header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { Link } from 'react-router-dom';




function Header({type}){
    
        const[isLoggedIn, setIsLoggedIn] = useState(false)

        const handleSearch = ()=>{
            // navigate("/hotels", {state:{ destination, date, options }})
           }
           useEffect(()=>{
            auth.onAuthStateChanged((user)=>{
               console.log('user',user)
               if(user){
                setIsLoggedIn(true)
               }else{
                setIsLoggedIn(false)
               }
            })
       },[])
    return(
        <div className='header'>
            <div className={type ===  "list" ? "header-container listMode" : "header-container" }>
            <div className='header-list'>
               <div className='header-listItems active'>
               <FontAwesomeIcon icon={faHome} />
               <Link to={`/`}>
               <span className='home'>home</span>
               </Link>
               </div>
               <div className='header-listItems'>
               <FontAwesomeIcon icon={faDashboard} />
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
               {
                isLoggedIn? (
                    <>
                        <Link to={`/user`}>
                        <div className='userProfile'></div>
                        </Link>
                    </>
                ):(
                   <>
                       
                   </>
                )
               }
              
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