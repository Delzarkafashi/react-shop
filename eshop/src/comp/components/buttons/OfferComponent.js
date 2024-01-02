import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferComponent.css';

function OfferComponent() {
    const navigate = useNavigate();

    const goToPhones = () => {
        navigate('/phone'); // Pathen som du definierade för din Phone-komponent i din Router
    };

    return (
        <div className="offer" onClick={goToPhones}>
            <p>flat 10% all iphone</p>
        </div>
    );
}

export default OfferComponent;
