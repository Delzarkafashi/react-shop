import React, { useState } from 'react';
import "./shop.css";
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import DetailPage from '../comp/components/DetailPage';
import Category from '../comp/components/Category'; // Importera Category-komponenten

const Shop = ({ shop, Filter, allcateFilter, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleDetail = (product) => {
        setSelectedProduct(product);
        setShowDetail(true);
    };

    const closedetail = () => {
        setShowDetail(false);
        setSelectedProduct(null);
    };

    return (
        <>
            {
                showDetail && selectedProduct &&
                <DetailPage product={selectedProduct} addtocart={addtocart} closeDetail={closedetail} />
            }
            <div className="shop">
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <Category Filter={Filter} allcateFilter={allcateFilter} />  {/* Använd Category-komponenten */}
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_left.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src="image/shop_top.webp" alt="" />
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop product</h2>
                            <div className="product_container">
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <div key={curElm.Id} className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} alt="" />
                                                    <div className="icon">
                                                        <li><AiFillHeart /></li>
                                                        <li onClick={() => handleDetail(curElm)}><AiFillEye /></li>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>$ {curElm.price}:-</p>
                                                    <button onClick={() => addtocart(curElm)}>Add to cart</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
