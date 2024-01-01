// TV.js
import React from 'react';
import { AiFillHeart, AiFillEye } from "react-icons/ai";

const TV = ({ shop, handleDetail, addtocart }) => {
    return (
        <div className="tv-container">
            <h1>Välkommen till TV-kategorin!</h1>
            <p>Här hittar du vårt utbud av TV-apparater. Utforska våra senaste modeller, smarta funktioner och innovativa teknologier.</p>

            <div className="tv-list">
                {shop.map((curElm) => {
                    return (
                        <div key={curElm.Id} className="tv-item">
                            <div className="img_box">
                                <img src={curElm.image} alt={curElm.Name} />
                                <div className="icon">
                                    <AiFillHeart />
                                    <AiFillEye onClick={() => handleDetail(curElm)} />
                                </div>
                            </div>
                            <div className="detail">
                                <h3>{curElm.Name}</h3>
                                <p>$ {curElm.price}:-</p>
                                <button onClick={() => addtocart(curElm)}>Add to cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TV;

