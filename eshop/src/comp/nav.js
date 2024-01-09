import React from "react";
import { MdLocalShipping } from 'react-icons/md';
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./nav.css"
import Breadcrumbs from "./components/Bredcrumbs.js";
import OfferComponent from "./components/buttons/OfferComponent.js";
import Logo from "./components/logo.js";
import SearchBox from "./components/SearchBox.js";


const Nav = ({search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    return (
        <>
        <div className="header">
            <div className="top_header">
                <div className="icon">
                <MdLocalShipping />
                </div>
                <div className="info">
                    <p>Free shipping when shopping upto $1000</p>
                </div>
            </div>
            <div className="mid_header">
                  <Logo/>
              
                  <SearchBox
                    search={search} 
                    setSearch={setSearch} 
                    searchproduct={searchproduct} 
                />
                {
                    isAuthenticated?
                    <div className="user">
                    <div className="icon">
                      <CiLogout />
                    </div>
                    <div className="btn">
                     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                    </div>
                    </div>
                    :
                     <div className="user">
                       <div className="icon">
                          <FiLogIn />
                       </div>
                      <div className="btn">
                        <button onClick={() => loginWithRedirect()}>Login</button>
                      </div>
                    </div>
                }
            </div>
            <div className="last_header">
                <div className="user_profile">
                    {
                        isAuthenticated ?
                        <>
                        <div className="icon">
                         <AiOutlineUser />
                        </div>
                        <div className="info">
                         <h2>{user.name}</h2>
                         <p>{user.email}</p>
                        </div>
                        </>
                        :
                        <>
                        <div className="icon">
                         <AiOutlineUser />
                        </div>
                        <div className="info">
                         <p>Please login</p>
                        </div>
                        </>
                    }   
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/shop" className="link">Shop</Link></li>
                        <li><Link to="/cart" className="link">Cart</Link></li>
                        <li><Link to="/tv" className="link">tv</Link></li>
                        <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>
                    <Breadcrumbs />
                </div>
                <div >
                <OfferComponent /> 
                </div>
            </div>
        </div>

        </>
    )
}

export default Nav