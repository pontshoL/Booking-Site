import '../CSS/featured.css'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { Link } from 'react-router-dom';

function Featured(){
   const [hotels, setHotels] = useState([]);
   useEffect(()=>{
      const getData = async ()=> {
         let data = await getDocs(collection(db,'hotel'))
         setHotels(data.docs.map((doc)=>(
            {...doc.data(), id:doc.id}
         )))
      }
      getData()
      console.log(hotels)
   },[])
    return(
      <div className='featured'>
      {hotels.map((hotel)=>(
      //      <div className='featuredItem'>
      //       <div className='featuredImage' >
      //       <img src={hotel.image} alt="" />
      //       </div>
           
      //      <div className='featuredTilte'>
      //         <h1>{hotel.name}</h1>
      //         <h2>{hotel.location}</h2>
      //         <h2>{hotel.description}</h2>
      //         <h2>{hotel.price}</h2>
      //         <button className='btnFeatures'>Features</button>
      //      </div>
      //   </div>

      <>
         <div className='hotelDiv'>
             <div className='hotelImageDiv'>
                  <img src={hotel.image}/>
             </div>
             <div className='hotelDetaildDiv'>
             <h1>{hotel.name}</h1>
              <h2>{hotel.location}</h2>
           
             <h2>R{hotel.amount}</h2>
             <Link to={`/hotels/${hotel.id}`}>
                 <button className='btnFeatures'>More</button>
             </Link>
           
             </div>
         </div>
      </>
      ))}
       

       {/* <div className='featuredItem'>
          <img src="hotel3.jfif" alt="" className='featuredImage' />
          <div className='featuredTilte'>
             <h1>Durban</h1>
             <h2>693 properties</h2>
          </div>
       </div>
       
       <div className='featuredItem'>
          <img src="hotel4.jpg" alt="" className='featuredImage' />
          <div className='featuredTilte'>
             <h1>Johannesburg</h1>
             <h2>693 properties</h2>
          </div>
       </div>
        */}

    
    </div>
    )
}
export default Featured;