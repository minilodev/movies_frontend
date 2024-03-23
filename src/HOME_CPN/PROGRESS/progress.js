// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/react
import React from 'react';

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/@ramonak/react-progress-bar
import ProgressBar from "@ramonak/react-progress-bar";

// https://ant.design/docs/react/introduce
import { Progress, Space } from 'antd';

// Any:
import "./progress.scss";
import "./progress_responsive.scss";

//---------------------------------------------- Arrow function Progress ----------------------------------------------//

const ProgressCpn = () => {

    //---------------------------------------------- Check data from be ----------------------------------------------//

    const [listProgressLeft, setListProgressLeft] = useState([]);
    const [listProgressRight, setListProgressRight] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/progress")
            .then((response) => {
                console.log("response: ", response);
                if (response.data && response.data.data.length > 0) {
                    setListProgressLeft(response.data.data[0]);
                    setListProgressRight(response.data.data[1]);
                }
            })
            .catch((err) => console.log("error: ", err.message));
    }, []);

    //---------------------------------------------- Render data from be ----------------------------------------------//

    const renderProgressLeft = () => {
        return listProgressLeft.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <div className="item-left">
                        <img className="item-image" src={item.image}></img>
                    </div>
                    <div className="item-right">
                        <div className="item-name">{item.name}</div>
                        <div className="item-percent">
                            <Progress percent={item.statisticalAllTime}
                                size="normal"
                                status="active"
                                className="item-percent-top"
                            />
                            <Progress percent={item.statisticalThisWeek}
                                size="normal"
                                status="active"
                                className="item-percent-bottom"
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }
    const renderProgressRight = () => {
        return listProgressRight.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <div className="item-left">
                        <img className="item-image" src={item.image}></img>
                    </div>
                    <div className="item-right">
                        <div className="item-name">{item.name}</div>
                        <div className="item-percent" style={{ margin: 0 }}>
                            <Progress percent={item.statisticalAllTime}
                                size="normal"
                                status="active"
                                className="item-percent-top"
                            />
                            <Progress percent={item.statisticalThisWeek}
                                size="normal"
                                status="active"
                                className="item-percent-bottom"
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            <div className="Menu-progress"></div>
            <div id="Progress">
                <div className="Progress-left">{renderProgressRight()}</div>
                <div className="Progress-right">{renderProgressLeft()}</div>
            </div>
        </div>
    )
}
export default ProgressCpn;