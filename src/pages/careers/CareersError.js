import {NavLink} from "react-router-dom";

export const CareersError = ({message}) => {

    return (
        <div className="careers-error">
            <h2>Error fetching careers</h2>
            <p>{message}</p>
            <NavLink to={'/'}>Back to Home</NavLink>
        </div>
    )
}