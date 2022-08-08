import Header from "./header";
import React,{useState} from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./navbar";
import SearchItem from "./searchItem";
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import '../CSS/list.css'


function List(){
     const location = useLocation();
     
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    return(<div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
          <div className='listWrapper'>
              <div className='listSearch'>
                  <h1 className='lsSearchTitle'>Search</h1>

                  <div className='lsItem'>
                      <label>Destination</label>
                      <input placeholder={destination} type="text" />
                  </div>

                  <div className='lsItem'>
                      <label>Check-In Date</label>
                      <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                      {openDate && <DateRange onchange={item=>setDate([item.selection])}
                       minDate = {new Date()}
                       ranges={date}
                        />}
                        <div className='lsItem'>
                            <label>Options</label>

                            <div className='lsOptions'>

                                 <div className='lsOptionItem'>
                                     <span className='lsOptionText'>Min Price<small>per night</small></span>
                                     <input type='number' className='lsOptionInput' />
                                 </div>

                                 <div className='lsOptionItem'>
                                     <span className='lsOptionText'>Max Price<small>per night</small></span>
                                     <input type='number' className='lsOptionInput' />
                                 </div>

                                 <div className='lsOptionItem'>
                                     <span className='lsOptionText'>Adult</span>
                                     <input type="number" min={1} placeholder={options.adult} className='lsOptionInput' />
                                 </div>

                                 <div className='lsOptionItem'>
                                     <span className='lsOptionText'>Children</span>
                                     <input type='number' min={0} className='lsOptionInput' placeholder={options.children}/>
                                 </div>

                                 <div className='lsOptionItem'>
                                     <span className='lsOptionText'>Room</span>
                                     <input type='number' min={1} className='lsOptionInput' placeholder={options.room}/>
                                 </div>
                            </div>
                            
                        </div>
                        
                      {/* <input type="text" /> */}
                  </div>
                  <button>Search</button>
              </div>
              <div className='listResults'>
                   <SearchItem />
                 
              </div>

           </div>

      </div>
     </div>
    )
}
export default List;