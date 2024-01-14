import React from "react";
import "./footer.css";
import { FaHeadphones, FaPiggyBank, FaShippingFast, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="parent-footer">
            <div className="div1-footer">
                <div className="icon_box">
                    <FaPiggyBank />
                </div>
                <div className="detail-footer">
                    <h3>Great Saving</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="div2-footer">
                 <div className="icon_container">
                  <div className="icon_box">
                       <FaShippingFast />
                  </div>
                </div>
                <div className="detail-footer">
                    <h3>Free delivery</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="div3-footer">
                <div className="icon_box">
                    <FaHeadphones />
                </div>
                <div className="detail-footer">
                    <h3>24/7 support</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="div4-footer">
                <div className="icon_box">
                    <FaWallet />
                </div>
                <div className="detail-footer">
                    <h3>Money back</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            {/* <div className="div5-footer"></div> */}
            <div className="div6-footer">
                <div className="header">
                    <img className="gorila-footer" src="image/logo gorila.png" alt="" />
                    <h1 className="Logo-Name">Gorilla Familjen</h1>
                </div>
                
            </div>
            {/* <div className="div7-footer"></div>
            <div className="div8-footer"></div>
            <div className="div9-footer"></div> */}
            <div className="div10-footer">
                <h3>Contact us</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>0709224098</li>
                    <li>info@gmail.com</li>
                </ul>
            </div>
            <div className="div11-footer">
                <h3>Your Account</h3>
                <ul>
                    <li>About us</li>
                    <li>Account</li>
                    <li>Payment</li>
                    <li>Sales</li>
                </ul>
            </div>
            <div className="div12-footer">
                <h3>Products</h3>
                <ul>
                    <li>Delivery</li>
                    <li>Track order</li>
                    <li>New product</li>
                    <li>Old product</li>
                </ul>
            </div>
            <div className="div13-footer">
                <h3>Contact us</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>0709224098</li>
                    <li>info@gmail.com</li>
                </ul>
            </div>
            
            <div className="div14-footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia, illum labore reprehenderit illo nisi.</p>
            </div>
        </div>
    );
};

export default Footer;
