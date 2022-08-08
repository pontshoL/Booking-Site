import '../CSS/propertyList.css'

function PropertyList(){
    return(
        <div className='pList'>
           <div className='pListItem'>
           <img src="hotel5.jpg" alt="" className='pListImage' />
           <div className='pListTitles'>
           <h1>Business Hotel</h1>
           <h2>123 Hotels</h2>
           </div>
           </div>

           <div className='pListItem'>
           <img src="hotel6.jpg" alt="" className='pListImage' />
           <div className='pListTitles'>
           <h1>Airpot Hotel</h1>
           <h2>382 Hotels</h2>
           </div>
           </div>

           <div className='pListItem'>
           <img src="hotel7.jpg" alt="" className='pListImage' />
           <div className='pListTitles'>
           <h1>Suit Hotel</h1>
           <h2>645 Hotels</h2>
           </div>
           </div>

           <div className='pListItem'>
           <img src="hotel8.jpg" alt="" className='pListImage' />
           <div className='pListTitles'>
           <h1>Resort Hotels</h1>
           <h2>118 Hotels</h2>
           </div>
           </div>
           
        </div>
    )
}
export default PropertyList;