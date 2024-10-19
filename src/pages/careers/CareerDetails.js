import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const CareerDetails = ({errorElement}) => {
    const {id} = useParams();
    const [career, setCareer] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const res = await fetch(`http://localhost:4000/careers/${id}`);

                if (!res.ok) {
                    throw Error("Career not found with id " + id);
                }

                const data = await res.json();
                setCareer(data);
            } catch (e) {
                setError(e.message);
            }
        }

        fetchCareer();
    }, [id]);

    return (
        error && errorElement
            ? React.cloneElement(errorElement, { message: error })
            : (
                <div className="careers-details">
                    <h2>Career Details for {career.title}</h2>
                    <p>Starting salary: {career.salary}</p>
                    <p>Location: {career.location}</p>
                </div>
            )
    )
}