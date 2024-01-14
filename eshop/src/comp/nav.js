import React from "react";
import { MdLocalShipping } from 'react-icons/md';
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css"
// import OfferComponent from "./components/buttons/OfferComponent.js";
import Logo from "./components/logo.js";
import SearchBox from "./components/SearchBox.js";
import NavMenu from "./components/NavMenu.js";


const Nav = ({search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    return (
        <>
        <div className="parent-Header">
            <div className="div1-Header">
            <div className="icon">
                <MdLocalShipping />
                </div>
                <div className="info">
                    <p>Free shipping when shopping upto $1000</p>
                </div>
            </div>
            <div className="div2-Header">
                {/* Innehåll */}
            </div>
            <div className="div3-Header">
                <Logo /> 
            </div>
            <div className="div4-Header">
    {isAuthenticated ? (
        <>
            <div className="icon"><CiLogout /></div>
            <div className="btn"><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></div>
        </>
    ) : (
        <>
            <div className="icon"><FiLogIn /></div>
            <div className="btn"><button onClick={() => loginWithRedirect()}>Login</button></div>
        </>
    )}
</div>

            <div className="div5-Header">
                {/* Innehåll */}
            </div>
            <div className="div6-Header">
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
            <div className="div7-Header" id="meny">
            <NavMenu />
            </div>
            <div className="div8-Header">
            <SearchBox />
            </div>
        </div>
        {/* <div className="AllHeader">
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
                  <SearchBox />
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
            <NavMenu />
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
            </div>
        </div>
        </div> */}

        </>
    )
}

export default Nav