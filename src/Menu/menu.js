// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/react
import React from 'react';

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/react-router-dom?activeTab=readme 
import { Link, Outlet } from "react-router-dom";

// https://www.npmjs.com/package/@ant-design/icons
import { PlusOutlined, TranslationOutlined, FileSearchOutlined, JavaScriptOutlined } from '@ant-design/icons'

// https://www.npmjs.com/package/antd
import { Button, Dropdown, Space } from 'antd';

// Any:
import "./menu.scss";
import "./menu_responsive.scss";
import logo from "../SVG/logo.svg";



const Menu = () => {
    useEffect(() => {
        axios.get("http://localhost:5000/menu")
            .then((response) => {
                console.log("response: ", response);
            })
            .catch((err) => console.log("error", err.message));
    });
    const items = [
        {
            key: '1',
            label: (
                <Link to="/" className="Dropdown-content">Home</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/People" className="Dropdown-content">People</Link>
            ),
        },
    ];
    return (
        <>
            <div className="Menu">
                <div className="Box-left">
                    <Link to="/" className="Box-menu-logo">
                        <JavaScriptOutlined className="Box-menu-logo-content" />
                    </Link>
                    <Space direction="vertical" className="Box-left">
                        <Space wrap>
                            <Dropdown menu={{ items, }} placement="bottom" className="Box-dropdown">
                                <Button>Movies</Button>
                            </Dropdown>
                            <Dropdown menu={{ items, }} placement="bottom" className="Box-dropdown">
                                <Button>TV Shows</Button>
                            </Dropdown>
                            <Dropdown menu={{ items, }} placement="bottom" className="Box-dropdown">
                                <Button>People</Button>
                            </Dropdown>
                            <Dropdown menu={{ items, }} placement="bottom" className="Box-dropdown">
                                <Button>More</Button>
                            </Dropdown>
                        </Space>
                    </Space>
                </div>
                <div className="Box-right">
                    <PlusOutlined className="Box-content" />
                    <TranslationOutlined className="Box-content" />
                    <Link to="/Login" className="Box-content">Login</Link>
                    <Link to="/Group" className="Box-content">Join group G.E.S.R</Link>
                    <FileSearchOutlined className="Box-content" />
                </div>
            </div>
            <Outlet />
        </>
    );
}
export default Menu;
