import React from 'react';


const NavBar = ({ countersNumber }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/#">
                Navbar {" "} <span className="badge badge-info">
                    {countersNumber}</span></a>
        </nav>
    );
};

export default NavBar;

