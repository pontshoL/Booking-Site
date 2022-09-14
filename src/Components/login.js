import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/firebase'
import '../CSS/login.css'



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const Validate = () =>{
        const PassValidate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (email == '' && password == '') {
            alert('your form cannot be empty')
        } else if(email == ''){
            alert('your email cannot be empty')
        }else if(!PassValidate.test(password)){
            alert('Your password should contain minimum eight characters, at least one letter and one number')
        }else{
            login()
        }
    }

    
    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate("/");
            alert('Signed in successfully')
        }).catch((error) => {
             console.log(error)
            
        })

    }
    return (
        <div className='LoginMain'>
                    <div className='SignInForm'>
                        <div className='SignInForMimge'></div>
                        <h1 style={{color:"white", paddingBottom:100}}>Sign In</h1>
                            <input type={'email'} placeholder="Email" className='name' onChange={((e) => setEmail(e.target.value))} />
                            <input type={'password'} placeholder="Password" className='pass' onChange={((e) => setPassword(e.target.value))} />
                            <button id='btn' onClick={Validate}>Sign In</button>
                            <span>
                                <Link to="/reset">Forgot Password?</Link>
                            </span>
                            <span>Dont have an Account?<br></br>
                                <Link to="/sign-up">Create Account Here</Link>
                            </span>
                    </div>
        </div>
            

    )
}

export default Login;