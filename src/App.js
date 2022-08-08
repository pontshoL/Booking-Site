import logo from './logo.svg';
import './App.css';
import HomePage from './Components/home';
import Login from './Components/login';
import SignUp from './Components/signUp';
import List from './Components/list';
import Hotel from './Components/hotel';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Config/firebase'
import pic from './IMAGES/hotel5.jpg'

function App() {
  const [hotels, setHotels] = useState([]);
// //   const hotels = [{
// //     name:'Tower Street Arpartment',
// //     amount: 1000,
// //     description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
// //     image:pic,
// //     id:1
// // },
// // {
// // name:'Tower Street Arpartment',
// // amount: 1000,
// // description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
// // image:pic,
// // id:2
// // },
// // {
// // name:'Tower Street Arpartment',
// // amount: 1000,
// // description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
// // image:pic,
// // id:3
// // },
// // {
// // name:'Tower Street Arpartment',
// // amount: 1000,
// // description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
// // image:pic,
// // id:4
// // },
// ]

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/sign-up' element={<SignUp/>} />
           <Route path="/home" element={<HomePage/>} />
           <Route path="/hotels" element={<List />} />
           <Route path="/hotels/:id" element={<Hotel hotels={hotels} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
