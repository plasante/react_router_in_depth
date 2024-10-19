import {NavLink, Outlet} from "react-router-dom";
import { useActiveLink} from "./useActiveLink";

export const HelpLayout = () => {

    const activeLink = useActiveLink();

    return (
        <div className={'help-layout'}>
            <h2>Website Help</h2>
            <p>Please click on the links below</p>

            <nav>
                <NavLink to={'faq'} className={activeLink === '/help/faq' ? 'active-link' : ''}>View the FAQ</NavLink>
                <NavLink to={'contact'} className={activeLink === '/help/contact' ? 'active-link' : ''}>Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}