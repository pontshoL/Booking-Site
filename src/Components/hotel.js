import '../CSS/hotel.css'
import Navbar from './navbar';
import Header from './header';
import hotel1 from '../IMAGES/room1.jpg'
import hotel2 from '../IMAGES/room1.2.jpg'
import hotel5 from '../IMAGES/room1.3.jpg'
import hotel4 from '../IMAGES/room1.1.jpg'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css 
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/firebase';



function Hotel({hotels}){
    // const [stayD, setDate] = useState()
    //     const [hotels,setHotels]=useState([])
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      //form inputs
      const [_name, setName] = useState('')
      const [_surname, setSurn] = useState('')
      const [_contactNo,setContactNo] = useState('')
      const [_email,setEmail] = useState('')

      console.log(date)
      console.log(date[0].startDate)
      let first = date[0].startDate.getDate();
      let second = date[0].endDate.getDate();
      console.log(first)
      console.log(second)
      let totalDays = second - first;
      let accumalatedDays = totalDays + 1
      console.log('total days stayed', accumalatedDays)

      //checkin and out dates

     let checkInD = date[0].startDate;
     let checkOut = date[0].endDate;




      //book function
      const reserve = () => {
         const bookRef = collection(db,'bookings')

         const bookingData = {
            name: name,
            amount : total,
            location: location,
            checkIn: checkInD,
            checkOut: checkOut,
            clientName : _name,
            clienSurname: _surname,
            clientContact: _contactNo,
            clientEmail: _email


         }

         addDoc(bookRef,bookingData).then(()=>{
            alert('booked successfully')
         }).catch((err)=>{
            console.log(err)
         })
      }
   


    //   let difference =  second.getTime() -  first.getTime()
    
   
      

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

    const [hotelDetails, setHotelDetails] = useState([])
    //funtion to calculate amount to be paid
   
    const {id} = useParams();


 //variables
  let amount;
  let name;
  let location;
  let days = 3;
  let total;
  //getting amount
  hotels.filter((item=>item.id == id)).map((res)=>{
      amount = res.amount 
      name = res.name
      location = res.location
   })
   
   //logic
   total = amount * accumalatedDays
   let totalAcumulated = total + amount
   console.log(total)
   console.log(name)
   console.log(location)
   console.log(total)
    function charges(){
        let amount = hotelDetails.amount;
        alert(amount.toString())
    }

console.log('id',id)




    console.log('hotels',hotels)
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            Image:hotel1
        },
        {
            Image:hotel2
        },
        {
            Image:hotel4
        },
        
        
        {
            Image:hotel5
        },
        
        
    ];
    // const handleOpen = (i)=>{
    //     setSlideNumber(i);
    //     setOpen(true);
    // }
    // const hanleMove = (direction)=>{
    //    let newSlideNumber;
    //    if (direction==="l") {
    //       newSlideNumber= slideNumber === 0 ? 5 : slideNumber-1
    //    }else{
    //     newSlideNumber= slideNumber === 5 ? 0 : slideNumber+1
    //    }
    //    setSlideNumber(newSlideNumber);
    // }
   
    return(
        <div>
          <Navbar />
          <Header type="list" />
          {/* {hotels.map((hotel)=>(
            <div></div>
          ))} */}

          {
            hotels.filter((item=>item.id == id)).map((res)=>(
                <>
               <div className='hotelContainer'>
           
           <div className='hotelWrapper'>
               <button className='bookNow' >Book Now</button>
               <h1 className='hotelTitle'>{res.name}</h1>
               <div className='hotelAdress'>
                   <FontAwesomeIcon icon={faLocationDot} />
                   <span>{res.location}</span>
               </div>
               {/* <span className='hotelDistance'>
                 Excellent Location - 500 meter from center
               </span> */}
               {/* <span className='hotelPriceHighlight'>
                 Book a stay over R1400 at this property and get a free airpot taxi
               </span> */}
               <div className='hotelImages'>
                    <img src={res.image}/>
               </div>
               <div className='bokinginfo'>
                   <div className='inputFields'>
                   <div className='headerSearch-item'>
                        <FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
                        { <span className='headerSearchText'>Check in Date</span> }
                        <span onChange={(e)=>setDate(e.target.value)} onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
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
                        <input className='field' type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                        <input type="text" placeholder="Enter Surname" onChange={(e)=>setSurn(e.target.value)}/>
                        <input type="number" placeholder="Enter Contact" onChange={(e)=>setContactNo(e.target.value)}/>
                        <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <button onClick={(e)=>{reserve()}}>Confirm</button>
                   </div>
                  
                   <div>
                  
                   </div>
               </div>
               <div className='hotelDetails'>
                   <div className='hotelDetailsText'>
                   <h1 className='hotelTitle'>Stay in the heart of Bliss</h1>
                   <p>  {res.description}  </p>
                   </div>
                   
                   <div className='hotelDetailPrice'>
                       <h1>Perfect for a 3-night stay!</h1>
                       <span>located near Tiantan Park, just a 10-minute walk from the National
                           Center for the Performing Arts and Tian'anmen Square
                        </span>
                        <h2>
                           <b>R{res.amount}</b> (3 nights)
                        </h2>
                        <button>Book Now</button>
                   </div>

               </div>
           </div>
           {/* <Footer /> */}
         </div>
                </>
            ))
          }
        
        </div>
    )
}

export default Hotel;