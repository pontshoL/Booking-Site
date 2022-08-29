import logo from './logo.svg';
import './App.css';
import HomePage from './Components/home';
import Login from './Components/login';
import SignUp from './Components/signUp';
import AboutUs from './Components/aboutUs';
import Hotel from './Components/hotel';
import ContactUs from './Components/contactUs';
import ResetPassword from './Components/forgotPassword';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Config/firebase'


function App() {
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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/sign-up' element={<SignUp/>} />
           <Route path="/homepage" element={<HomePage/>} />
           {/* <Route path="/hotels" element={<List />} /> */}
           <Route path="/hotels/:id" element={<Hotel hotels={hotels} /> } />
           <Route path='/about' element={<AboutUs/>} />
           <Route path='/contact' element={<ContactUs/>} />
           <Route path='/reset' element={<ResetPassword/>} />

      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
