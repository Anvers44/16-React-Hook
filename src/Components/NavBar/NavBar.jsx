import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo-nav">Logo</div>

            <div className="nav">
                <ul className="nav-ls">
                    <li> <a href="/"> Home</a></li>
                    <li> <a href='/'> About</a></li>
                    <li> <a href='/'> Contact</a></li>

                </ul>
            </div>

        </div>
    );
};

export default NavBar;