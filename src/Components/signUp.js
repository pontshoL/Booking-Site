import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import {auth} from '../Config/firebase'
import React,{useId, useState} from 'react'
import '../CSS/signUp.css'
import { Link } from 'react-router-dom'
import {db} from '../Config/firebase'
import {addDoc, collection} from 'firebase/firestore'



function SignUp(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const navigate = useNavigate();

    const validate = ()=>{
        const PassValidate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(name == "" && surname == "" && email =="" && password){
            alert('please fill the form')

        }else if(name == ""){
            // console.log('your name cannot be empty')
            alert('your name cannot be empty')
        }else if(surname == ""){
            // console.log('your surname cannot be empty')
            alert('your surname cannot be empty')
        }else if(email == ""){
            // console.log('email cant be empty')
            alert('your email cannot be empty')
        }
        else if(!PassValidate.test(password))
        {
            //  console.log('Your password should contain minimum eight characters, at least one letter and one number')
            alert('Your password should contain minimum eight characters, at least one letter and one number')
        }
        else{
            Register()
        }
    }
    
    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
            const collectionRef = collection(db,"users")
            const UserID = userInfo.user.uid
            console.log(UserID)
            const user = {
                userID: UserID,
                name: name,
                surname:surname,
            };
            addDoc(collectionRef,user)    
            }).catch((error)=>{
                console.log(error)
            })
            navigate("/sign-in");
    })

    return(
        <div className='mainSignUp'>
        <div className='formSignUp' >
            <div className='formSignimge'>
                {/* <img src='logo.jfif' alt='image'/> */}
            </div>
            <h1 style={{color:"white", paddingBottom:100}}>Sign Up</h1>
                <input type="text" placeholder="Name" onChange={((e) => setName(e.target.value))}/>
                <input type="text" placeholder="Surname"  onChange={((e) => setSurname(e.target.value))}/>
                <input type={'email'} placeholder="Email"  onChange={((e) => setEmail(e.target.value))} />
                <input type={'password'} placeholder="Password"  onChange={((e) => setPassword(e.target.value))} />
                <button onClick={validate }>Sign Up</button>
                <span>Already have an Account?<Link to="/sign-in">SignIn</Link> </span>
        </div>

</div>

    )
}

export default SignUp;