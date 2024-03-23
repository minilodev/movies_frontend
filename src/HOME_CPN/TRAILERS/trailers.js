// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/react
import React from 'react';

// https://www.npmjs.com/package/axios
import axios from "axios";

// Any:
import "./trailers.scss";
import "./trailers_responsive.scss";

//---------------------------------------------- Arrow function TrailersCpn ----------------------------------------------//

const TrailersCpn = () => {
    const [listTrailersLeft, setListTrailersLeft] = useState([]);
    const [listTrailersRight, setListTrailersRight] = useState([]);
    const [hoverdImage, setHoverdImage] = useState('');
    useEffect(() => {
        axios
            .get("http://localhost:5000/trailers")
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setListTrailersLeft(response.data.data[0]);
                    setListTrailersRight(response.data.data[1]);
                }
            })
            .catch((err) => console.log("error: ", err.message));

    }, []);
    // Render video 
    const renderVideoLeft = () => {
        return listTrailersLeft.map((item1, index) => {
            return (
                <div className="item" key={index}>
                    <div className="">
                        <img className="item-image" src={item1.image} alt="ERROR" onMouseEnter={handleHover}></img>
                    </div>
                    <div className="item-name">{item1.name}</div>
                    <div className="item-description">{item1.description}</div>
                </div>
            );
        });
    };
    const renderVideoRight = () => {
        return listTrailersRight.map((item2, index) => {
            return (
                <div key={index}>
                    <div>{item2.notification}</div>
                </div>
            )
        })
    }

    // Tabs: 
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    //---------------------------------------------- Use hanleHover ----------------------------------------------//

    const handleHover = (e) => {
        console.log('hover', e.target.getAttribute('src'))
        if (e.target.getAttribute('src')) setHoverdImage(e.target.getAttribute('src'));
    }

    //---------------------------------------------- React HTML ----------------------------------------------//

    return (
        <div id="Trailers">
            {/* <div className="Wrapper-bottom">{hoverdImage && <img className="Wrapper-bottom-image" src={hoverdImage} />}</div> */}
            <div className="Wrapper-top">
                <div className="Title">
                    <div className="Title-name">Latest Trailers</div>
                    <div className="Wrapper">
                        <div className={toggleState === 1 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(1)}>Popular</div>
                        <div className={toggleState === 2 ? "Title-content Active-tabs" : "Title-content"} onClick={() => toggleTab(2)}>In Theaters</div>
                    </div>
                </div>
                <div className="Content">
                    <div className={toggleState === 1 ? "Active-content" : "Show-content"}>
                        <div className="Active-content-data">{renderVideoLeft()}</div>
                    </div>
                    <div className={toggleState === 2 ? "Active-content" : "Show-content"}>{renderVideoRight()}</div>
                </div>
            </div>
        </div>
    )
}
export default TrailersCpn;