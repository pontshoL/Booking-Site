import '../CSS/contactus.css'
import Navbar from "./navbar";
import Header from "./header";

function ContactUs(){
    return(
        <div>
             <Navbar />
             <Header/>
            <div className='contacts'>
                <div className='numbers'>
                    <span>ContactUs</span><br></br>
                    <span>(+27)825434229</span><br></br>
                    <span>(015)2973541</span>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;