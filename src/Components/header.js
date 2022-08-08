import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import '../CSS/header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'




function Header({type}){
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate = useNavigate();
      const [openOptions, setOpenOptions] = useState(false);
        const [options, setOptions] = useState({
            adult:1,
            children:0,
            room:1,
        });
        const handleOption = (name, operation)=>{
            setOptions((prev) => {
                return{
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
                }; 
            });
        };

        const handleSearch = ()=>{
            navigate("/hotels", {state:{ destination, date, options }})
           }

    return(
        <div className='header'>
            <div className={type ===  "list" ? "header-container listMode" : "header-container" }>
            <div className='header-list'>
               <div className='header-listItems active'>
               <FontAwesomeIcon icon={faBed} />
               <span>home</span>
               </div>
               <div className='header-listItems'>
               <FontAwesomeIcon icon={faPlane} />
               <span>About Us</span>
               </div>
               <div className='header-listItems'>
               <FontAwesomeIcon icon={faCar} />
               <span>Contact</span>
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
               <div className='header-search'>
                   <div className='headerSearch-item'>
                        <FontAwesomeIcon icon={faBed} className='header-icon' />
                        <input type="text" placeholder="Where are you going?" className='HeaderSearchInput' onChange={e=>setDestination(e.target.value)}/>
                   </div>
                   <div className='headerSearch-item'>
                        <FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
                        { <span className='headerSearchText'>Date To Date</span> }
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                        {openDate &&<DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate = {new Date()}
                       />}
                   </div>
                   <div className='headerSearch-item'>
                        <FontAwesomeIcon icon={faPerson} className='header-icon' />
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        {openOptions &&<div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
                                    <span className='optionCounterNuber'>{options.adult}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>

                            <div className='optionItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("children","d")}>-</button>
                                    <span className='optionCounterNuber'>{options.children}</span>
                                    <button /*disabled={options.children <= 0}*/ className='optionCounterButton' onClick={()=>handleOption("children","i")}>+</button>
                                </div>

                            </div>

                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton' onClick={()=>handleOption("room","d")}>-</button>
                                    <span className='optionCounterNuber'>{options.room}</span>
                                    <button /*disabled={options.room <= 1}*/ className='optionCounterButton' onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                                
                            </div>
                        </div>}
                   </div>
                   <div className='headerSearch-item'>
                        <button className='headerBtn' onClick={handleSearch}>Search</button>
                   </div>

               </div></>}
            </div>
        
        </div>
    );
};
export default Header;