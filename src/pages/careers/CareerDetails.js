import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const CareerDetails = () => {
    const {id} = useParams();

    const [career, setCareer] = useState([]);

    useEffect(() => {
        const fetchCareer = async () => {
            const res = await fetch(`http://localhost:4000/careers/${id}`);
            const data = await res.json();
            setCareer(data);
        }

        fetchCareer();
    }, [id]);

    return (
        <div className="careers-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
        </div>
    )
}