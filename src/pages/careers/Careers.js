import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

const Careers = () => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        const fetchCareers = async () => {
            const res = await fetch("http://localhost:4000/careers");
            const data = await res.json();
            setCareers(data);
        }

        fetchCareers();
    }, []);

    return (
        <div className="careers">
            {careers.map((career) => (
                <NavLink to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default Careers;