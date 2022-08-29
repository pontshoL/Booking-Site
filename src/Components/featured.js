import '../CSS/featured.css'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { Link } from 'react-router-dom';

function Featured(){
   const [hotels, setHotels] = useState([]);
   const [search, setSearch] = useState("");
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
         <div className='header-search'>
                  <div className='inputSearch'>
                      <input type="text" placeholder="Enter Location" onChange={((e)=>setSearch(e.target.value))}/>
                      <div className='btn'>
                      <button className='headerBtn' /*={handleSearch}*/>Search</button>
                      </div>
                     
                  </div>
                   <div className='headerSearch-item'>
                        
                   </div>

               </div>

      {hotels.filter((hotel)=>{
         if (hotel.location.toLowerCase().includes(search.toLowerCase())) {
            return(hotel);
         } else {
             if (search == "") {
               return(hotel);
             }
         }
      }).map((hotel)=>(
      
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
       
    
    </div>
    )
}
export default Featured;