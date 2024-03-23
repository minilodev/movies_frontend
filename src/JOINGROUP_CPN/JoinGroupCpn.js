// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/react
import React from 'react';

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/antd
import { Col, Row } from 'antd';

// https://www.npmjs.com/package/@ant-design/icons
import { JavaScriptOutlined, ExclamationCircleFilled } from '@ant-design/icons'

// https://www.npmjs.com/package/react-router-dom?activeTab=readme 
import { Link, Outlet } from "react-router-dom";

// Any:
import "./JoinGroupCpn.scss";

//---------------------------------------------- Arrow function peopleCpn ----------------------------------------------//

const JoinGroupCpn = () => {
    const [joinGroup, setJoinGroup] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/Join')
            .then((response) => {
                console.log("response: ", response);
                if (response.data) {
                    setJoinGroup(response.data)
                };
            })
            .catch((err) => console.log("error: ", err.message));
    }, []);

    const renderJoinGroup = () => {
        return joinGroup.map((item, index) => {
            ////////////////////////
        });
    }

    const [toggleState, setToggleState] = useState(false)
    const toggleTab = () => {
        setToggleState(!toggleState);
    }

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} id="Wrapper-content">
            <Col span={5} className="Wrapper-left gutter-row">
                <div className="Left-cpn-title">
                    Benefits of being a member
                </div>
                <div className="Left-cpn-content">
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Find something to watch on your subscribed streaming services
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Log the movies and TV shows you have watched
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Keep track of your favourite movies and TV shows and get recommendations from them
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Build and maintain a personal watchlist
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Build custom mixed lists (movies and TV)
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Take part in movie and TV discussions
                        </span>
                    </div>
                    <div className="Left-cpn">
                        <JavaScriptOutlined className="Icon-check" />
                        <span className="Left-cpn-text">
                            Contribute to, and improve the information in our database
                        </span>
                    </div>
                </div>
            </Col>
            {toggleState ?
                <Col span={18} className="Wrapper-right gutter-row">
                    <div className="Right-cpn-title">
                        Sign up for an account
                    </div>
                    <div className="Right-cpn-text">
                        Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
                    </div>
                    <div className="Notification">
                        <div className="Notification-title">
                            <ExclamationCircleFilled className="Notification-title-icon" />There was an error processing your signup
                        </div>
                        <ul>
                            <li>Email is required</li>
                            <li>Password is required</li>
                            <li>Username is required</li>
                            <li>Password can't be blank</li>
                            <li>Password confirm can't be blank</li>
                            <li>Password needs to be at least 4 characters long</li>
                            <li>Email does not appear to be valid</li>
                        </ul>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Username
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Password (4 characters minimum)
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Password Confirm
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Email
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-text">
                        By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.
                    </div>
                    <div className="Right-menu">
                        <>
                            <div className="Button" onClick={toggleTab}>Sign In</div>
                            <Link to="/" className="Cancel">Cancel</Link>
                            <Outlet />
                        </>
                    </div>
                </Col>
                :
                <Col span={18} className="Wrapper-right gutter-row">
                    <div className="Right-cpn-title">
                        Sign up for an account
                    </div>
                    <div className="Right-cpn-text">
                        Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Username
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Password (4 characters minimum)
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Password Confirm
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Email
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-text">
                        By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.
                    </div>
                    <div className="Right-menu">
                        <>
                            <div className="Button" onClick={toggleTab}>Sign In</div>
                            <Link to="/" className="Cancel">Cancel</Link>
                            <Outlet />
                        </>
                    </div>
                </Col>
            }
        </Row>
    )
}
export default JoinGroupCpn;