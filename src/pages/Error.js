import React from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from "react-router-dom";

function Error( ) {
    return (
         <Hero>
             <Banner
                 title="404"
                 subtitle="page not found"
             >
                 <Link to='/react-beach-resort' className="btn-primary">
                     Back To Home
                 </Link>
             </Banner>
         </Hero>
    );
}

export default Error;