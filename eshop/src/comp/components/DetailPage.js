import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import "./DetailPage.css";

const DetailPage = ({ product, addtocart, closeDetail }) => {
    // Ingen intern tillståndslogik för `detail` behövs längre.

    return(
        <div className="product_detail">
            <button className="close_btn" onClick={closeDetail}><AiOutlineClose/></button>
            <div className="container">
                <div className="img_box">
                    <img src={product.image} alt={product.Name} />
                </div>
                <div className="info">
                    <h4># {product.cat}</h4>
                    <h2>{product.Name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga facere in neque sapiente aliquId unde ipsum, atque accusamus laborum!</p>
                    <h3>${product.price}:-</h3>
                    <button onClick={() => addtocart(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
