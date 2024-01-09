import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                <div className="user_profile">
                    <div className="icon">
                        <AiOutlineUser />
                    </div>
                    <div className="info">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    <div className="user">
                        <div className="icon">
                            <CiLogout />
                        </div>
                        <div className="btn">
                            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="user">
                    <div className="icon">
                        <FiLogIn />
                    </div>
                    <div className="btn">
                        <button onClick={() => loginWithRedirect()}>Login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
