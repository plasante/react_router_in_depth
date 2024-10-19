import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useActiveLink() {
    // State to keep track of the active link
    const [activeLink, setActiveLink] = useState('');

    // Get the current location
    const { pathname } = useLocation();

    // Update the active link state whenever the pathname changes
    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);

    return activeLink;
}