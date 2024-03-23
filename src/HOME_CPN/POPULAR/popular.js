// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/react-circular-progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Any:
import "./popular.scss";
import "./popular_responsive.scss";

//---------------------------------------------- Arrow function PopularCpn ----------------------------------------------//

const PopularCpn = () => {
    const [popular, setPopular] = useState([]);
    const [inTheaters, setInTheaters] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/HomePopular")
            .then((response) => {
                console.log("response: ", response);
                if (response.data) {
                    setPopular(response.data.popular);
                    setInTheaters(response.data.inTheaters);
                }
            })
            .catch((err) => console.log("error: ", err.message));
    }, []);

    //---------------------------------------------- Render data from backend ----------------------------------------------//

    const renderPopular = () => {
        return popular.map((item1, index) => {
            const percentage = item1.statistical;
            let color = '';
            if (percentage >= 70) {
                color = 'rgb(19, 194, 66)';
            }
            else if (percentage < 70 && percentage >= 30) {
                color = 'rgb(232, 252, 3)';
            }
            else {
                color = 'rgb(252, 3, 3)';
            };
            return (
                <div className="item" key={index}>
                    <img className="item-image" src={item1.image}></img>
                    <CircularProgressbar className="item-statistical"
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({ pathColor: color, rotation: 0.05, textSize: '35px', textColor: '#ffffff', trailColor: '#4c4f52' })}
                    />
                    <div className="item-name">{item1.name}</div>
                    <div className="item-date">{item1.date}</div>
                </div>
            );
        });
    };
    const renderInTheaters = () => {
        return inTheaters.map((item2, index) => {
            return (
                <div className="item2-notification" key={index}>
                    <div className="item2-notification">{item2.notification}</div>
                </div>
            );
        });
    };

    //---------------------------------------------- Use onclick T-Fs ----------------------------------------------//

    const [toggleState, setToggleState] = useState(false)
    const toggleTab = () => {
        setToggleState(!toggleState);
    }

    //---------------------------------------------- React HTML ----------------------------------------------//

    return (
        <div id="Popular">
            <div className="Title">
                <div className="Title-name">What's Popular</div>
                <div className="Wrapper">
                    <div className="zz" onClick={toggleTab}>InTheaters</div>
                </div>
            </div>
            <div className="Content">
                {toggleState ?
                    <div className="Active-content-right">{renderInTheaters()}</div>
                    :
                    <div className="Active-content-left">{renderPopular()}</div>
                }
            </div>
        </div>
    )
}
export default PopularCpn;