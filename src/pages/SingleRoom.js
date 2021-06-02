import React, {Component} from 'react';
import defaultImg from "../images/room-1.jpeg"
import {RoomContext} from "../Context";
import {Link} from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";


class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            slug:this.props.match.params.slug,
            defaultImg
        }
    }

    static contextType = RoomContext;


    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
            <div className="error">
                <h3>No Such room could be found...</h3>
                <Link to='/rooms' className="btn-primary">
                    Back To Rooms
                </Link>
            </div>
            )}
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        return  (
               <Hero hero='roomsHero'>
                 <Banner title={`${name} room`}>
                  <Link to='/rooms' className='btn-primary'>
                      Back to Rooms
                  </Link>
                 </Banner>
               </Hero>
                )}
}

export default SingleRoom;