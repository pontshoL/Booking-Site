import '../CSS/user.css'
import React,{useState, useEffect} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../Config/firebase';
import { Link } from 'react-router-dom';
import {  signOut } from "firebase/auth";

function UserProfile(){
    // get user
    const [user, setUser] = useState("");
    const[userData,setUserData] = useState({});
    const[userEmail, setEmail] = useState('')


      const getProfile = async() =>{
           const user = auth.currentUser;
           const UserID = user.uid;
        //    console.log(user)
        //    console.log(UserID)
           const email = user.email
           setEmail(email)
        //    console.log(email)

            const CollectionRef = collection(db, 'users')
            const myData = query(CollectionRef, where('userID', '==', UserID))
            const data = await getDocs(myData)
            
            data.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log("user details: ", doc.data());
                         setUserData(doc.data());
                         console.log(doc.data())
                  })
         
                
          }
          useEffect(()=>{

            getProfile()
        },[])
 

      function Logout(){
        signOut(auth).then(() => {
          // Sign-out successful.

          console.log( 'Sign-out successful')
        }).catch((error) => {
          // An error happened.
          console.log( 'something went wrong')
        });
      }
      
       

        
    return(
        <div className='profileDiv'>
           <div className='subProfile'>
            <h1 style={{textAlign: 'center', fontSize:40}}>{userData.name}'s Profile</h1>
            <Link to='/'>
              <button className='userButton ' onClick={Logout}>Logout</button>
            </Link>
           </div>
           <div className='userImage'>

              </div>
              <div className='detailsUser'>
                    <h4 style={{textAlign: 'center'}}>Email: {userEmail}</h4>
                    <h4 style={{textAlign: 'center'}}>Surname: {userData.surname}</h4>
                    <h4 style={{textAlign: 'center'}}>Name: {userData.name}</h4>
              </div>
           {/* 
              <button className='profButton'>Logout</button>
            */}
           
        </div>
    )
}
export default  UserProfile;