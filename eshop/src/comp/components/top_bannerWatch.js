import React from 'react';
import { Link } from 'react-router-dom';
import './top_bannerWatch.css';

const TopBanner = () => {
    return (
        <div className="top_banner">
            <div className="contant">
                <h3>silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first order</p>
                <Link to="/watch" className="link">Shop Now</Link>
            </div>
        </div>
    );
};

export default TopBanner;
