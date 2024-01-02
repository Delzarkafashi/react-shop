import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './SearchButton.css'; // Importera din CSS

const SearchButton = ({ searchproduct }) => {
    return (
        <>
            <button onClick={searchproduct} className="search-button"><AiOutlineSearch /></button>
        </>
    );
};

export default SearchButton;
