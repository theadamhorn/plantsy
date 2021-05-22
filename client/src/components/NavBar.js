import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // if (req.session.logged_in) {
    //     setIsLoggedIn(true);
    // }
    // let links
    // let login
    // if (isLoggedIn) {
    //     links =
    //         <div>
    //             <li className="nav-item">
    //                 <Link to="/gardeners" className="nav-link">Gardeners</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/users" className="nav-link">My Plants</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/trellis" className="nav-link">Trellis</Link>
    //             </li>
    //         </div>
    //     login = <a className="nav-link active" aria-current="page" id="logout" href="#">Logout</a>
    //     // button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //     login = <a className="nav-link active" aria-current="page" data-bs-toggle="modal" href="#modal" role="button">Login</a>
    //     // button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    return (

        // Nav code from main.handlebars modified with conditionals extracted as variables
        < nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><i className="fas fa-seedling fa-lg"></i> Plantsy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/plants" className="nav-link active" aria-current="page">Plants</Link>
                        </li>
                        {links}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {login}
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>

    )
}