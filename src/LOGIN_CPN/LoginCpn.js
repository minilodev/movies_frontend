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
import "./LoginCpn.scss"

const LoginCpn = () => {
    const [toggleState, setToggleState] = useState(false)
    const toggleTab = () => {
        setToggleState(!toggleState);
    }
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} id="Wrapper-login">
            {toggleState ?
                <Col span={24} className="Wrapper-right gutter-row">
                    <div className="Right-cpn-title">
                        Login to your account
                    </div>
                    <div className="Right-cpn-text">
                        In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.
                    </div>
                    <div className="Right-cpn-text">
                        If you signed up but didn't get your verification email, click here to have it resent.
                    </div>
                    <div className="Notification">
                        <div className="Notification-title">
                            <ExclamationCircleFilled className="Notification-title-icon" />There was a problem
                        </div>
                        <ul>
                            <li>We couldn't find your username.</li>
                            <li>You have 7 remaining login attempts.</li>
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
                            Password
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-menu">
                        <>
                            <div className="Button" onClick={toggleTab}>Login</div>
                            <Link to="/" className="Cancel">Reset password</Link>
                            <Outlet />
                        </>
                    </div>
                </Col>
                :
                <Col span={24} className="Wrapper-right gutter-row">
                    <div className="Right-cpn-title">
                        Login to your account
                    </div>
                    <div className="Right-cpn-text">
                        In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.
                    </div>
                    <div className="Right-cpn-text">
                        If you signed up but didn't get your verification email, click here to have it resent.
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Username
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-cpn-type">
                        <div className="Right-cpn-type-name">
                            Password
                        </div>
                        <input type="text" className="Right-cpn-type-input"></input>
                    </div>
                    <div className="Right-menu">
                        <>
                            <div className="Button" onClick={toggleTab}>Login</div>
                            <Link to="/" className="Cancel">Reset password</Link>
                            <Outlet />
                        </>
                    </div>
                </Col>
            }
        </Row>
    )
}
export default LoginCpn;
