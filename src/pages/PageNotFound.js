import {Link} from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div><h2>404 Page Not Found</h2>
            <p>Go to the <Link to={'/'}>Home</Link></p>
        </div>
    )
}