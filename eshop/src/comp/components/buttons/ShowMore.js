import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowMore.css';

function ShowMore() {
    const navigate = useNavigate();

    const goToPhones = () => {
        navigate('/shop'); // Pathen som du definierade för din Phone-komponent i din Router
    };

    return (
        <div className="ShowMore" onClick={goToPhones}>
            <p>Show More</p>
        </div>
    );
}

export default ShowMore;
