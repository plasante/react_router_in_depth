import {NavLink, Outlet} from "react-router-dom";
import { loremIpsum } from 'lorem-ipsum';
import { useActiveLink} from "./useActiveLink";

export const HelpLayout = () => {
    const text = loremIpsum({
        count: 10,
        units: 'words'
    })

    const activeLink = useActiveLink();

    return (
        <div className={'help-layout'}>
            <h2>Website Help</h2>
            <p>{text}</p>

            <nav>
                <NavLink to={'faq'} className={activeLink === '/help/faq' ? 'active-link' : ''}>View the FAQ</NavLink>
                <NavLink to={'contact'} className={activeLink === '/help/contact' ? 'active-link' : ''}>Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}