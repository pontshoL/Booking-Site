import '../CSS/featured.css'
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth} from '../Config/firebase';
import { Link } from 'react-router-dom';

function Featured(){
   const [isLoggedin, setIsLoggedIn] = useState(false)
   const [hotels, setHotels] = useState([]);
   const [search, setSearch] = useState("");
    

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
                   {/* <div className='price-filter-div'>
                        <p className='p'>Price filter</p>
                   </div> */}

               </div>

      {hotels.filter((hotel)=>{
         if (hotel.location.toLowerCase().includes(search.toLowerCase())) {
            return(hotel);
         } else {
             if (search == "") {
               return(hotel);
             }
         }
      }).map((hotel,index)=>(
      
      <>
         <div className='hotelDiv' key={index}>
            {
               isLoggedin ? (
                  <Link to={`/hotels/${hotel.id}`}
                  >
                 <div className='hotelImageDiv' >
                      <img src={hotel.image}  />
                      <div className='title'>
                         <h2>{hotel.name}</h2>
                         <h2>{hotel.location}</h2>
                         <h2>R{hotel.amount}</h2>
                      </div>
                 </div>
                 </Link>
               ):(
                  <div className='hotelImageDiv' onClick={()=>alert('please login first')}>
                  <img src={hotel.image}  />
                  <div className='title'>
                     <h2>{hotel.name}</h2>
                     <h2>{hotel.location}</h2>
                     <h2>R{hotel.amount}</h2>
                  </div>
             </div>
               )
            }
           
            
           
            
         </div>
      </>
      ))}
    </div>
    )
}
export default Featured;