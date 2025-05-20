import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from './NavBar.module.css';

const Navbar = forwardRef(({ onSearchEvent }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log('componente Listo');
    }, []);
    useEffect(() => {
        console.log("onSearchEvent");
    }, [onSearchEvent]);
    useEffect(() => {
        console.log("search: ", search);
    }, [search]);

    useImperativeHandle(ref, () => ({
        search
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    }
    const handleEnterKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearchEvent(evt.target.value)
        }
    }

    return (
        <div ref={ref} className={styles.navBarContainer}>
            <div className={styles.title}>
                <p>Eventos</p>
            </div>
            <div className={styles.searchContainer}>
                <input placeholder="Buscar evento"
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKeyDown}
                    className={styles.searchInput}
                />
            </div>
        </div>
    )
});

Navbar.displayName = 'Navbar';
export default Navbar;