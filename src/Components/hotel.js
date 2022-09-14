import '../CSS/hotel.css'
import Navbar from './navbar';
import Header from './header';
import hotel1 from '../IMAGES/room1.jpg'
import hotel2 from '../IMAGES/room1.2.jpg'
import hotel5 from '../IMAGES/room1.3.jpg'
import hotel4 from '../IMAGES/room1.1.jpg'
import hotel3 from '../IMAGES/bath.jpg'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css 
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { Link } from 'react-router-dom';



function Hotel({ hotels }) {
  // const [stayD, setDate] = useState()
  //     const [hotels,setHotels]=useState([])
  const [_name, setName] = useState('')
  const [_surname, setSurn] = useState('')
  const [_contactNo, setContactNo] = useState('')
  const [_email, setEmail] = useState('')
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  //form inputs

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
    const bookRef = collection(db, 'bookings')

    const bookingData = {
      name: name,
      amount: total,
      location: location,
      checkIn: checkInD,
      checkOut: checkOut,
      clientName: _name,
      clienSurname: _surname,
      clientContact: _contactNo,
      clientEmail: _email,
      days:accumalatedDays
    }

    addDoc(bookRef, bookingData).then(() => {
      alert('booked successfully')
    }).catch((err) => {
      console.log(err)
    })
  }

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [hotelDetails, setHotelDetails] = useState([])
  //funtion to calculate amount to be paid
  const { id } = useParams();
  //variables
  let amount;
  let name;
  let location;
  let days = 3;
  let total;
  //getting amount
  hotels.filter((item => item.id == id)).map((res) => {
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
  function charges() {
    let amount = hotelDetails.amount;
    alert(amount.toString())
  }

  console.log('id', id)




  console.log('hotels', hotels)
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      Image: hotel1
    },
    {
      Image: hotel2
    },
    {
      Image: hotel4
    },
     {
      Image: hotel3
     },
    {
      Image: hotel5
    },


  ];

  return (
    <div className='hoteldiv'>
      <div className='hoteldiv-1'>
        <Navbar />
        <Header type="list" />
      </div>
      {
        hotels.filter((item => item.id == id)).map((res) => (
          <>
            <div className='hotelContainer'>
              <div className='hotelAdress'>
                <h1>{res.name}</h1>
                <FontAwesomeIcon icon={faLocationDot} />
                <span className='span'>{res.location}</span>
              </div>
              <div className='hotelWrapper'>
                <div className='image-desc'>
                  <div className='hotelImages'>
                    <img src={res.image} />
                    <img src={res.image} />
                    <img src={res.image} />
                    <img src={res.image} />
                    {/* <img src={hotel1} />
                    <img src={hotel2} />
                    <img src={hotel5} />
                    <img src={hotel3} /> */}
                     {/* <img src={hotel4} /> */}
                    
                  </div>

                  <div className='Description'>
                    
                    <h1>Stay in the heart of Bliss</h1>
                    {res.alternativeDesc}
                    <div className='details'>
                      {/* <h1>Perfect for a 3-night stay!</h1>
                      <span>located near Tiantan Park,<br></br> just a 10-minute
                        walk from the National<br></br>
                        Center for the Performing Arts<br></br>
                        and Tian'anmen Square
                      </span> */}
                      <h2>
                        <b>Amount:R{res.amount}</b>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className='bokinginfo'>
                  <div className='headerSearchText'>
                    <h2>Check in and checkOut Date</h2>
                    <div className='input'>
                      {/* <input type="date" />
                      <p>to</p>
                      <input type="date" /> */}
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
                  </div>

                  <div className='input-1'>
                    <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /><br></br>
                    <input type="text" placeholder="Enter Surname" onChange={(e) => setSurn(e.target.value)} /><br></br>
                    <input type="number" placeholder="Enter Contact" onChange={(e) => setContactNo(e.target.value)} /><br></br>
                    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <Link to={`/homepage`}>
                      <button onClick={(e) => { reserve() }}>Reserve</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      }
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;