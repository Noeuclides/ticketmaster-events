import { useState } from "react";

const Navbar = ({ onSearchEvent }) => {
    const [search, setSearch] = useState('');
    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    }
    const handleEnterKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearchEvent(evt.target.value)
        }
    }

    return (
        <div>
            <p>Eventos</p>
            <input placeholder="Buscar evento"
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyDown}
            />
        </div>
    )
};

export default Navbar;