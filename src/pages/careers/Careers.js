import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

const Careers = ({errorElement}) => {
    const [careers, setCareers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const res = await fetch("http://localhost:4000/careers");

                if (!res.ok) {
                    throw Error("Could not fetch careers");
                }

                const data = await res.json();
                setCareers(data);
            } catch (e) {
                setError(e.message);
            }
        }


        fetchCareers();
    }, []);

    return (
        error && errorElement
            ? React.cloneElement(errorElement, {message: error})
            :
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