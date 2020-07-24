import React from 'react';
import './InfoBar.css';
import '../../icons/closeIcon.png';
import '../../icons/onlineIcon.png';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <a href="/" > <img src="onlineIcon" alt=" online" /></a>
            <h3> {room}</h3>
        </div>

        <div className=" rightinnerContainer " >
            <a href="/" > <img src="closeIcon" alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;