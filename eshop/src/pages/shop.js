import React, { useState } from 'react';
import "./shop.css";
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import DetailPage from '../comp/components/DetailPage';
import Category from '../comp/components/Category';
import FilterHela from '../comp/components/Filter-hela';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Shop = ({ shop, addtocart }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(shop); 


    // Tillstånd för sökterm
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchTerm = queryParams.get('search');
        if (searchTerm) {
            const lowerCaseTerm = searchTerm.toLowerCase();
            const filtered = shop.filter(product =>
                product.Name.toLowerCase().includes(lowerCaseTerm) ||
                product.cat.toLowerCase().includes(lowerCaseTerm)
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(shop);
        }
    }, [location, shop]);
    



    const handleDetail = (product) => {
        setSelectedProduct(product);
        setShowDetail(true);
    };

    const closedetail = () => {
        setShowDetail(false);
        setSelectedProduct(null);
    };

    // Filtrerar produkterna baserat på kategori
    const Filter = (category) => {
        const results = shop.filter(product => product.cat === category);
        setFilteredProducts(results);
    };

    // Återställer filtret för att visa alla produkter
    const allcateFilter = () => {
        setFilteredProducts(shop);
    };

    const onApplyFilter = (filters) => {
        console.log("Applying filters:", filters);

        let results = shop;
        if (filters.minPrice !== '') {
            results = results.filter(product => product.price >= Number(filters.minPrice));
        }
        if (filters.maxPrice !== '') {
            results = results.filter(product => product.price <= Number(filters.maxPrice));
        }
        if (filters.type !== 'all') {
            results = results.filter(product => product.cat === filters.type);
        }
        if (filters.color !== 'all') {
            results = results.filter(product => product.color === filters.color);
        }

        setFilteredProducts(results);
    };

    return (
        <>
            {showDetail && selectedProduct &&
                <DetailPage product={selectedProduct} addtocart={addtocart} closeDetail={closedetail} />
            }
            <div className="shop">
                <h2># shop</h2>
                <div className="container">
                    <div className="right_box">
                        <Category Filter={Filter} allcateFilter={allcateFilter} />
                        <FilterHela onApplyFilter={onApplyFilter} />
                        <div className="product_box">
                            <h2>Shop product</h2>
                            <div className="product_container">
                                {
                                    filteredProducts.map((curElm) => {
                                        return (
                                            <div key={curElm.Id} className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} alt={curElm.Name} />
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
