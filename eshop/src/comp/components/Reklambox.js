
<div className="banner">
<div className="img_box">
    <img src="image/shop_top.webp" alt="" />
</div>
</div>
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferComponent.css';

function Reklambox() {
    const navigate = useNavigate();

    const goToPhones = () => {
        navigate('/phone'); // Pathen som du definierade för din Phone-komponent i din Router
    };

    return (
        <div className="banner">
            <div className="img_box">
              <img src="image/shop_top.webp" alt="" />
            </div>
        </div>
    );
    }
export default Reklambox;