import '../CSS/searchItem.css'
import { useNavigate } from "react-router-dom";

import pic from '../IMAGES/hotel5.jpg'
import { Link } from 'react-router-dom';
function SearchItem(){

    const hotels = [{
        name:'Tower Street Arpartment',
        amount: 1000,
        description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
        image:pic,
        id:1
    },
    {
    name:'Tower Street Arpartment',
    amount: 1000,
    description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
    image:pic,
    id:2
    },
    {
    name:'Tower Street Arpartment',
    amount: 1000,
    description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
    image:pic,
    id:3
    },
    {
    name:'Tower Street Arpartment',
    amount: 1000,
    description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea",
    image:pic,
    id:4
    },
    ]

console.log(hotels)

    // const navigate = useNavigate();

    // const handleAvailability = ()=>{
    //     navigate("/hotels/:id")
    //    }
    return(
        <>
        {

            hotels.map((results)=>(
                <>
                         <div className='searchItem'>
            <img src={results.image}alt="" className='siImge' />
            <div className='siDesc'>
          <h1 className='siTitle'>{results.name}</h1>
          {/* <span className='siDistance'>500 meter from center</span> */}
          {/* <span className='siTaxiOp'>free Airpot Taxi</span> */}
          {/* <span className='siSubTitle'>
             Studio Arpartment with air condition
          </span> */}
          {/* <span className='siFeatures'>
            entire studio * 1 bathroom * 21m 1 full bed
          </span> */}
          {/* <span className='siCancelOp'>
             free cancellation
        </span> */}
        <span className='siCancelOpSubt'>
            you can cancell later, so lock in this great price today
       </span>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailText'>
                <span className='siPrice'>{results.amount}</span>
                {/* <span className='siTaxOP'>includes taxes and fees</span> */}
              

                <Link to={`/hotels/${results.id}`}>
                <button className='siCheckButton' >See Availability</button>
                </Link>
                
            </div>
        </div>
        </div>
                </>
            ))
        
       
    }



        </>
    )
}
export default SearchItem;