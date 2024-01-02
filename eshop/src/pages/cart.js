import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {

    // Increase Quantity of cart product
    const incqty = (product) => {
        setCart(cart.map((item) =>
            item.Id === product.Id ? { ...item, qty: item.qty + 1 } : item
        ));
    };

    // Decrease Quantity of cart product or remove if it's 1
    const decqty = (product) => {
        const exist = cart.find((x) => x.Id === product.Id);
        if (exist.qty === 1) {
            removeproduct(product);
        } else {
            setCart(cart.map((item) =>
                item.Id === product.Id ? { ...item, qty: item.qty - 1 } : item
            ));
        }
    };

    // Removing cart product
    const removeproduct = (product) => {
        setCart(cart.filter((item) => item.Id !== product.Id));
    };

    // Total Price
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

    // Update Quantity based on user's input
    const updateQuantity = (product, newQuantity) => {
        newQuantity = parseInt(newQuantity);
        if (newQuantity < 1) {
            removeproduct(product); // Remove if quantity is 0 or less
        } else {
            setCart(cart.map((item) =>
                item.Id === product.Id ? { ...item, qty: newQuantity } : item
            ));
        }
    };

    return (
        <div className="cart">
            <h3>#cart</h3>
            {cart.length === 0 && (
                <div className="empty_cart">
                    <h2>Your shopping cart is empty</h2>
                    <Link to="/shop"><button>Shop now</button></Link>
                </div>
            )}
            <div className="container">
                {cart.map((curElm) => (
                    <div key={curElm.Id} className="box">
                        <div className="img_box">
                            <img src={curElm.image} alt="" />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Name}</h3>
                                <p>Price: ${curElm.price}</p>
                                <p>Total: ${curElm.price * curElm.qty}</p>
                            </div>
                            <div className="quantity">
                                <button onClick={() => incqty(curElm)}>+</button>
                                <input type="number" value={curElm.qty} 
                                       onChange={(e) => updateQuantity(curElm, e.target.value)}/>
                                <button onClick={() => decqty(curElm)}>-</button>
                            </div>
                            <div className="icon">
                                <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom">
                {cart.length > 0 && (
                    <>
                        <div className="Total">
                            <h4>Sub Total: ${total}</h4>
                        </div>
                        <button>Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
