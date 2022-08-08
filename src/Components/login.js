import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Config/firebase'
import '../CSS/login.css'



function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const login = (()=>{
        signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            const user = userCredential.user;
            navigate("/home");
        }).catch((error)=>{
            
            setError(true)
        })
        
    })
    return(
        <div className='main'>
            <div className='subMain'>
                <div>
                    <div className='img'>
                        <div className='container-image'>
                        </div>
                        <h1 style={{color:"white", paddingBottom:12}}>Sign In</h1>
                           <div  className='inputs'>
                               
                                <div>
                                <input type={'email'} placeholder="Email" className='name' onChange={((e)=> setEmail(e.target.value))}/><br></br>
                                </div>
                                <div>
                                <input type={'password'} placeholder="Password" className='pass' onChange={((e)=>setPassword(e.target.value))} /><br></br>
                                </div>
                                <button id='btn' onClick={login}>Sign In</button><br></br>
                                <span>Dont have an Account?<br></br>
                                  <Link to="/sign-up">Create Account Here</Link>
                                </span><br></br>
                                {error && <span className='span2'>wrong email or password</span>}
                                
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;