import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import "./SearchBox.css";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/shop?search=${searchTerm}`);
        setSearchTerm(''); // Rensa sökfältet
    };

    return (
        <div className="search_box">
            <input
                type="text"
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>
                <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBox;
