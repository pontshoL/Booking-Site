import Navbar from "./navbar";
import Header from "./header";
import Featured from "./featured";
// import PropertyList from "./propertyList";
// import FeaturedProperty from "./featuredProperty";
import Footer from "./footer";


function HomePage(){
    return(
        <div >
           <Navbar />
           <Header/>
           <div className="homeContainer">
              <Featured />
              {/* <h1 className="homeTitle">Browse by property type</h1>
              <PropertyList/>
               <h1 className="homeTitle">Browse by property</h1>
              <FeaturedProperty /> */}
              <Footer />
           </div>
        </div>
    )
}
export default HomePage;