import React from 'react';
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from "react-router-dom";
import RoomContainer from '../Components/RoomContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner
                title="Our Rooms"
            >
                <Link to='/react-beach-resort' className="btn-primary">
                     Back To  Home
                </Link>
            </Banner>
        </Hero>
       <RoomContainer />
        </>
    );
}

export default Rooms;