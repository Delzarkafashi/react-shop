import React, { useState } from 'react';
import './Filter.css';
import SearchButton from './buttons/SearchButton';
import ResetButton from './buttons/ResetButton';

const FilterHela = ({ onApplyFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [type, setType] = useState('all');
    const [color, setColor] = useState('all');

    const handleKeyPress = (event) => {
        const charCode = event.which ? event.which : event.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            event.preventDefault();
            alert("Du kan endast ange siffror här.");
        }
    };

    const handleSearch = () => {
        onApplyFilter({
            minPrice: minPrice,
            maxPrice: maxPrice,
            type: type,
            color: color
        });
    };

    const handleReset = () => {
        setMinPrice('');
        setMaxPrice('');
        setType('all');
        setColor('all');
        onApplyFilter({
            minPrice: '',
            maxPrice: '',
            type: 'all',
            color: 'all'
        });
    };

    return (
        <div className="filters">
            <div className="filter-section">
                <label htmlFor="minPrice">Min Pris: </label>
                <input 
                    id="minPrice"
                    type="text" 
                    value={minPrice} 
                    onChange={(e) => setMinPrice(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Min" 
                />
            </div>
            <div className="filter-section">
                <label htmlFor="maxPrice">Max Pris: </label>
                <input 
                    id="maxPrice"
                    type="text" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Max" 
                />
            </div>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="headphones">headphones</option>
                <option value="speaker">speaker</option>
                <option value="laptop">laptop</option>
                <option value="tv">tv</option>
                <option value="all">all</option>
            </select>
            <SearchButton searchproduct={handleSearch} />
            <ResetButton handleReset={handleReset} />
        </div>
    );
};

export default FilterHela;
