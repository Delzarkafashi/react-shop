import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import "./SearchBox.css"

const SearchBox = ({ search, setSearch, searchproduct }) => {
    return (
        <div className="search_box">
            <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={searchproduct}><AiOutlineSearch /></button>
        </div>
    );
}

export default SearchBox;
