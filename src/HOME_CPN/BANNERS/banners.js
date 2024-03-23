// https://www.npmjs.com/package/react
import React, { useState, useEffect } from "react";

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/antd
import { Carousel } from 'antd';

// Any:
import "./banners.scss";
import "./banners_responsive.scss"
// Images:
import intro3 from "../../IMG/intro3.jpg"

//---------------------------------------------- Arrow function Banners ----------------------------------------------//

const BannersCpn = () => {

    //---------------------------------------------- Check data from be ----------------------------------------------//

    const [banner, setBanner] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/banners')
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setBanner(response.data.data[0]);
                }
            })
            .catch((err) => console.log("error", err.message));
    }, []);

    //---------------------------------------------- Render data from backend ----------------------------------------------//

    const renderBanner = () => {
        return banner.map((item, index) => {
            return (
                <div className="" key={index}>

                </div>
            )
        });
    }

    const contentStyle = {
        height: '',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    };

    //---------------------------------------------- React HTML ----------------------------------------------//

    return (
        <div id="Main-all">
            <Carousel autoplay autoplaySpeed={2500} className="Main-slider">
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/SqAZjEqqBAYvyu3KSrWq1d0QLB.jpg'" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tfw5LKySp7uEYJ3CUuD4TKx3s8y.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctxm191q5o3axFzQsvNPlbKoSYv.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/e3h0knvtz4qPg9dwYdWynALrW9s.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9xfDWXAUbFXQK585JvByT5pEAhe.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/pQvqGK6KQDILL7SJrhMQsRvJfLB.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg" alt="Error"></img>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="Slider">
                        <img className="Siler-image" src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/5N8LOeRzt7LcZIhPbNVaCsVOPdT.jpg" alt="Error"></img>
                    </div>
                </div>
            </Carousel>
            <div className="Content-slider">
                <div className="Banners-title">
                    Welcome.
                </div>
                <div className="Banners-content">
                    Millions of movies, TV shows and people to discover. Explore now.
                </div>
                <div className="Banners-type">
                    <input className="Banners-type-content" placeholder="Search for movie, tv show, person" type="text"></input>
                    <div className="Banners-type-icon">Search</div>
                </div>
            </div>
        </div>
    );
}
export default BannersCpn;