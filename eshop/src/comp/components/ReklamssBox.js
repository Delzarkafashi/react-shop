import React from 'react';
import './ReklamssBox.css';

const ReklamssBox = () => {
    return (
        <div className="banners">
            <div className="container">
                <div className="left_box">
                    <div className="box">
                        <img src="image/Multi-Banner-1.avif" alt="banner" />
                    </div>
                    <div className="box">
                        <img src="image/Multi-Banner-2.avif" alt="banner" />
                    </div>
                </div>
                <div className="right_box">
                    <div className="top">
                        <img src="image/Multi-Banner-3.webp" alt="" />
                        <img src="image/Multi-Banner-4.avif" alt="" />
                    </div>
                    <div className="bottom">
                        <img src="image/Multi-Banner-5.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReklamssBox;
