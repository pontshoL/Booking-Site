import '../CSS/navbar.css'
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import { auth} from '../Config/firebase';


function Navbar(){
    const [isLoggedin, setIsLoggedIn] = useState(false)
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

    return(
        <div className='nav-bar'>
           <div className='nav-container'>
               <span className='logo'>Welcome To Vannessa's Booking Site</span>
               <div className='NavItems'>
                {
                    isLoggedin ? (
                        <>
                        </>
                    ):(
                        <>
                            <Link to={`/sign-up`}>
                              <button className='navButton'>Register</button>
                            </Link>
                            <Link to={`/sign-in`}>
                               <button className='navButton'>Log In</button>
                            </Link>
                        </>
                    )
                }
                
               </div>
           </div>
          
        </div>
    )
}
export default Navbar;