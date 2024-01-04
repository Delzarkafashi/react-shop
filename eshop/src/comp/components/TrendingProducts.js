// TrendingProducts.js
import React from 'react';
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import ShowMore from './buttons/ShowMore';
import "./TrendingProducts.css";

const TrendingProducts = ({ trendingProduct, handleDetail, addtocart, allTrendingProduct, filteracate }) => {
    return (
        <div className="trending">
            <div className="container">
                <div className="left_box">
                    <div className="header">
                        <div className="heading">
                            <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                        </div>
                        <div className="cate">
                            <h3 onClick={() => filteracate("new")}>New</h3>
                            <h3 onClick={() => filteracate("featured")}>Featured</h3>
                            <h3 onClick={() => filteracate("top")}>top selling</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            {trendingProduct.map((curElm, index) => (
                                <div key={index} className="box">
                                    <div className="img_box">
                                        <img src={curElm.image} alt="" />
                                        <div className="icon">
                                            <div className="icon_box">
                                                <li onClick={() => handleDetail(curElm)}><AiFillEye /></li>
                                            </div>
                                            <div className="icon_box">
                                                <AiFillHeart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <button className="btn" onClick={() => addtocart(curElm)}>Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ShowMore/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
