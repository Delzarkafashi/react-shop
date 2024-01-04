import React, { useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import "./Newsletter.css";

const Newsletter = () => {
    const [email, setEmail] = useState(''); // Lägg till detta om du vill hantera e-postadressen

    return (
        <div className="newsletter">
            <div className="head">
                <h3>newsletter</h3>
            </div>
            <div className="form">
                <p>join our mailing list</p>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail" 
                    autoComplete="off"
                />
                <button>subscribe</button>
                <div className="icon_box">
                    <div className="icon">
                        <BiLogoFacebook />
                    </div> 
                    <div className="icon">
                        <BiLogoTwitter />
                    </div>    
                    <div className="icon">
                        <BiLogoInstagram />
                    </div> 
                    <div className="icon">
                        <BiLogoYoutube />
                    </div>               
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
