import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="nav-marge"></div>
            <div className="navbar">
                <div className="logo-nav">Logo</div>

                <div className="nav">
                    <ul className="nav-ls">
                        <li> <a href="/"> Home</a></li>
                        <li> <a href='/'> Aboute</a></li>
                        <li> <a href='/'> Home</a></li>

                    </ul>
                </div>

            </div>

        </div>


    );
};

export default NavBar;