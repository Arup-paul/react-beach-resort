import React, {Component} from 'react';
import defaultImg from "../images/room-1.jpeg"
import {RoomContext} from "../Context";
import {Link} from "react-router-dom";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import StyledHero from '../Components/StyledHero'

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
                <Link to='/react-beach-resort/rooms' className="btn-primary">
                    Back To Rooms
                </Link>
            </div>
            )}
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg,...defaultImg] = images;
        return  (
            <>
               <StyledHero img ={mainImg  || this.state.defaultImg} >
                 <Banner title={`${name} room`}>
                  <Link to='/react-beach-resort/rooms' className='btn-primary'>
                      Back to Rooms
                  </Link>
                 </Banner>
               </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item,index) =>{
                           return  <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : {size} SQFT</h6>
                            <h6>
                                Max Capcity : {
                                    capacity  > 1  ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                             <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                     <ul className="extras">
                         {extras.map((item,index) => {
                             return <li key={index}>- {item}</li>
                         })}
                     </ul>
                </section>
                </>
                )}
}

export default SingleRoom;