import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import {auth} from '../Config/firebase'
import React,{useState} from 'react'
import '../CSS/login.css'



function SignUp(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    
    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
                navigate("/home");
            }).catch((error)=>{
                console.log(error)
            })
    })

    return(
        <div className='main'>
            <div className='subMain'>
                <div>
                    <div className='img'>
                        <div className='container-image'>
                        </div>
                        <h1 style={{color:"white", paddingBottom:90}}>Sign Up</h1>
                           <div>
                              
                                <div>
                                <input type={'email'} placeholder="Email" className='name' onChange={((e)=> setEmail(e.target.value))}/><br></br>
                                </div>
                                <div>
                                <input type={'password'} placeholder="Password" className='pass' onChange={((e)=>setPassword(e.target.value))}/><br></br>
                                </div>

                                <button id='btn' onClick={Register}>Sign Up</button>
                                
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;