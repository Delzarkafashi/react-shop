import React, { useState, useCallback } from 'react';
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import './category.css';
import DetailPage from '../../comp/components/DetailPage';
import Filter from '../../comp/components/Filter';

const Watch = ({ shop, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(shop.filter(product => product.cat === 'watch'));

    const handleDetail = useCallback((product) => {
        setSelectedProduct(product);
        setShowDetail(true);
    }, []);  

    const closedetail = () => {
        setShowDetail(false);
        setSelectedProduct(null);
    };

    const handleApplyFilter = (filters) => {
        const { minPrice, maxPrice, type, color } = filters;

        let results = shop.filter(product => product.cat === 'watch');

        if (minPrice !== '') {
            results = results.filter(product => product.price >= Number(minPrice));
        }
        if (maxPrice !== '') {
            results = results.filter(product => product.price <= Number(maxPrice));
        }

        if (type !== 'all') {
            results = results.filter(product => product.type === type);
        }

        if (color !== 'all') {
            results = results.filter(product => product.color === color);
        }

        setFilteredProducts(results);
    };

    return (
        <>
        {
            showDetail && selectedProduct &&
            <DetailPage product={selectedProduct} addtocart={addtocart} closeDetail={closedetail} />
        }
        <div className="category_box">
            <Filter onApplyFilter={handleApplyFilter} />

            <h1>Välkommen till watch-kategorin!</h1>
            <p>Här hittar du vårt utbud av watchs. Utforska våra senaste modeller, smarta funktioner och innovativa teknologier.</p>

            <div className="category_container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((curElm) => (
                        <div key={curElm.Id} className="category-item">
                            <div className="img_box">
                                <img src={curElm.image} alt={curElm.Name} />
                                <div className="icon">
                                    <li><AiFillHeart /></li>
                                    <li onClick={() => handleDetail(curElm)}><AiFillEye /></li>
                                </div>
                            </div>
                            <div className="detail">
                                <h3>{curElm.Name}</h3>
                                <div className="centered-content">
                                    <div className="color-icon" style={{ backgroundColor: curElm.color }}></div>
                                </div>
                                <p>$ {curElm.price}:-</p>
                                <button onClick={() => addtocart(curElm)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Inga produkter matchar de valda filterkriterierna.</div>
                )}
            </div>
        </div>
        </>
    );
};

export default Watch;
