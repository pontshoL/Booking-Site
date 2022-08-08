import '../CSS/featuredProperty.css'

function FeaturedProperty(){
    return(
        <div className='fp'>
            <div className='fpItem'>
                <img src='hotel9.jpg' alt="" className='fpImage' /><br></br>
                <span className='fpName'>Golden Cherry Motel</span><br></br>
                <span className='fpCity'>Pretoria</span><br></br>
                <span className='fpPrice'>Starting from R700</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
           
           <div className='fpItem'>
                <img src='hotel9.jpg' alt="" className='fpImage' /><br></br>
                <span className='fpName'>Golden Cherry Motel</span><br></br>
                <span className='fpCity'>Pretoria</span><br></br>
                <span className='fpPrice'>Starting from R700</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
           </div>
           
           <div className='fpItem'>
                <img src='hotel9.jpg' alt="" className='fpImage' /><br></br>
                <span className='fpName'>Golden Cherry Motel</span><br></br>
                <span className='fpCity'>Pretoria</span><br></br>
                <span className='fpPrice'>Starting from R700</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
           </div>
           

           {/* <img src='hotel9.jpg' alt="" className='fpImage' /><br></br>
           <span className='fpName'>Golden Cherry Motel</span><br></br>
           <span className='fpCity'>Pretoria</span><br></br>
           <span className='fpPrice'>Starting from R700</span>
           <div className='fpRating'>
              <button>8.9</button>
              <span>Excellent</span>
           </div> */}
        </div>
    )
}
export default FeaturedProperty;