import React from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from "react-router-dom";

function Home() {
    return (
    <Hero>
       <Banner
           title="Luxirious Roomds"
           subtitle="delux rooms startion $299"
       >
           <Link to='/rooms' className="btn-primary">
               Our Room
           </Link>
       </Banner>
    </Hero>
    )

}

export default Home;