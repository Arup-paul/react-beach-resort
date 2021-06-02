import React, {Component} from 'react';
import {RoomContext} from "../Context";

class FeaturedRoom extends Component {
    static contextType = RoomContext;

    render() {

        return (
            <div>
            welcome
            </div>
        );
    }
}

export default FeaturedRoom;