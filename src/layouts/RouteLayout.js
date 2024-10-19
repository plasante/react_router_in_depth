import {NavLink, Outlet} from 'react-router-dom';
import { useActiveLink} from "./useActiveLink";

const RootLayout = () => {
    const activeLink = useActiveLink();

    return (
        <div>
            <header>
                <nav>
                    <h1>React Router In Depth</h1>
                    <NavLink
                        to="/"
                        className={activeLink === '/' ? 'active-link' : ''}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={activeLink === '/about' ? 'active-link' : ''}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/help"
                        className={activeLink === '/help' ? 'active-link' : ''}
                    >
                        Help
                    </NavLink>
                    <NavLink
                        to="/careers"
                        className={activeLink === '/careers' ? 'active-link' : ''}
                    >
                        Careers
                    </NavLink>
                </nav>
            </header>

            {/* If you navigate to /about React Router will render <About /> in place of <Outlet /> */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;