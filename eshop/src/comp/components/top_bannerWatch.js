import React from 'react';
import { Link } from 'react-router-dom';
import './top_bannerWatch.css';

const TopBanner = () => {
    return (
 
            <div className="parent-Top-Banner">
                <div className="div1-Bakgrund">
                    <div className="div2-Contant"> 
                        <h3 className='h3-Top-Banner'>silver aluminum</h3>
                        <h2 className='h2-Top-Banner'>Apple Watch</h2>
                        <p className='p-Top-Banner'>30% off at your first order</p>
                        <Link to="/watch" className="link-Top-Banner">Shop Now</Link>
                    </div>
                </div>
            </div>
            
    );
};

export default TopBanner;
