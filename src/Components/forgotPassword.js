import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { auth } from '../Config/firebase'
import '../CSS/login.css'
import '../CSS/reset.css'



function ResetPassword() {
    const [email, setEmail] = useState("");
    const auth = getAuth();
    
     sendPasswordResetEmail(auth, email)
     .then(()=>{
        alert('reset successful')
     })
      .catch((err) => {
         console.log(err)
      })
    return (
        <div className='resetPassMain'>
                    <div className='resetform'>
                        <div className='resetImge'></div>
                        <form onSubmit={sendPasswordResetEmail}>
                            <h1 style={{color:"white", paddingBottom:100}}>Reset Password</h1>
                            <input type={'email'} placeholder="Email" className='name' onChange={((e) => setEmail(e.target.value))} /><br></br>
                            {/* <input type={'password'} placeholder="Password" className='pass' onChange={((e) => setPassword(e.target.value))} /><br></br> */}
                            <button id='btn' type='submit'>Reset</button>
                        </form>
                           
                    </div>
                    </div>
            

    )
}

export default ResetPassword;