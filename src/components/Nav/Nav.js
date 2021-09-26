import React from 'react';
import './Nav.css';
import builderLogo from '../../images/builder.png';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">
                        <img src={builderLogo} alt="" width="60" height="60"/>
                    </a>
                    <a className="navbar-brand fw-bold" href="/home">City Builder</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link fw-bold text-white" aria-current="page" href="/community">Community</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fw-bold text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fw-bold text-white" href="/support">Support</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"/>
                        <button className="btn my-btn fw-bold text-white" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;