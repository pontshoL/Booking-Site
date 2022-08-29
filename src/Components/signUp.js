import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import {auth} from '../Config/firebase'
import React,{useState} from 'react'
import '../CSS/login.css'
import {db} from '../Config/firebase'
import {addDoc, collection} from 'firebase/firestore'



function SignUp(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const navigate = useNavigate();
    
    const Register = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            const collectionRef = collection(db,"users")
            const user = {
                name: name,
                surname:surname,
            };
            addDoc(collectionRef,user)    
            }).catch((error)=>{
                console.log(error)
            })
            navigate("/homepage");
    })

    return(
        <div className='main'>
            

                
        <div className='form' >
            <div className='imge'>
                {/* <img src='logo.jfif' alt='image'/> */}
            </div>
            <h1 style={{color:"white", paddingBottom:100}}>Sign Up</h1>
            <input type="text" placeholder="Name" className='input' onChange={((e) => setName(e.target.value))}/>
                <input type="text" placeholder="Surname" className='input' onChange={((e) => setSurname(e.target.value))}/>
                <input type={'email'} placeholder="Email" className='name' onChange={((e) => setEmail(e.target.value))} /><br></br>
                <input type={'password'} placeholder="Password" className='pass' onChange={((e) => setPassword(e.target.value))} /><br></br>
                <button id='btn' onClick={Register}>Sign Up</button>
                
        </div>

</div>

    )
}

export default SignUp;