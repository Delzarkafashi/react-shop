import React from "react";
import "./footer.css"
import { FaHeadphones, FaPiggyBank, FaShippingFast, FaWallet } from "react-icons/fa" 

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                         <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>Free delivery</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaHeadphones />
                        </div>
                        <div className="detail">
                            <h3>24/7 support</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                         <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>mony back</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="header">
                        <img src="image/logo.webp" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia, illum labore reprehenderit illo nisi.</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Products</h3>
                            <ul>
                                <li>Delivey</li>
                                <li>Track oder</li>
                                <li>New product</li>
                                <li>Old product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Contact us</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>0709224098</li>
                                <li>info@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer