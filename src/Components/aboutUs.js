import Header from "./header";
import Navbar from "./navbar";
import '../CSS/about.css'
import { Link } from 'react-router-dom';


function AboutUs(){
    return(
        <div>
             <Navbar />
             <Header/>
             <Link to={`/`}>
             <div className="button">
                {/* <button>Go To HomePage</button> */}
             </div>
             </Link>
            <div className="mainAbout">
           
               <div className="text1">
                  Since 2015<br></br>
                  Started in 2015, Booking.com for Business has become one of the world’s largest online booking tools for corporate travel.<br></br> 
                  Part of Booking.com, it’s Booking.com for Business’ mission to help businesses reduce their travel spend by providing<br></br>
                   enterprise-grade travel management software at no cost and offer one of the widest selections of travel options in the world<br></br> 
                   at highly competitive rates.
                   <div className="image">
                 <img src="booking.jfif" alt="image" />
               </div>
               </div>
               

               <div className="text2">
               <div className="image2">
                 <img src="client.jpg" alt="image" />
               </div>
                 Complete business travel<br></br>
                 By bringing together all elements of the business trip, Booking.com for Business aims to make it easier for companies to book,<br></br>
                 manage and report on everything related to business travel. A highly intuitive interface allows travel bookers to book the<br></br> 
                 entire trip in one single booking.

               </div>

               <div className="text2">
                 Complete business travel<br></br>
                 By bringing together all elements of the business trip, Booking.com for Business aims to make it easier for companies to book,<br></br>
                 manage and report on everything related to business travel. A highly intuitive interface allows travel bookers to book the<br></br> 
                 entire trip in one single booking.
                 <div className="image2">
                 <img src="client.jpg" alt="image" />
               </div>
               </div>
               
            </div>
        </div>
    )
}
export default AboutUs;