// https://www.npmjs.com/package/react
import { useState, useEffect } from "react";

// https://www.npmjs.com/package/react
import React from 'react';

// https://www.npmjs.com/package/axios
import axios from "axios";

// https://www.npmjs.com/package/antd
import { Col, Row } from 'antd';

// Any:
import "./person.scss";

//---------------------------------------------- Arrow function peopleCpn ----------------------------------------------//

const PersonCpn = () => {

    //---------------------------------------------- Check data from be ----------------------------------------------//

    const [person, setPerson] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/PeoplePerson')
            .then((response) => {
                console.log("response: ", response);
                if (response.data) {
                    setPerson(response.data.person)
                }
            })
            .catch((err) => console.log("error: ", err));
    }, []);

    //---------------------------------------------- Render data from backend ----------------------------------------------//

    const renderPerson = () => {
        return person.map((item, index) => {
            return (
                <Col span={6} className="Item" key={index}>
                    <img className="Avatar" src={item.avatar} alt="Error"></img>
                    <div className="Meta">
                        <div className="Name-author">{item.nameAuthor}</div>
                        <div className="Known-for">{renderKnownFor(item.knownFor)}</div>
                    </div>
                </Col>
            );
        });
    }
    const renderKnownFor = (knownFor) => {
        return knownFor.map((name, index) => {
            return (
                <div key={index}>{name}</div>
            );
        });
    };


    //---------------------------------------------- React HTML ----------------------------------------------//

    return (
        <div id="Person">
            <div className="Title-name">Popular People</div>
            <Row span={24} className="Person-wrapper">{renderPerson()}</Row>
        </div>
    );
}
export default PersonCpn;