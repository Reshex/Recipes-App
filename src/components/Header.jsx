import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <a className="navbar-brand" href="#">Foodofid</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bestdishes">Best Dishes</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={props.handleLogOut}>Log Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
