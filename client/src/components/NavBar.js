import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="col text-center" style={{fontWeight: 700}}>
           <p> This is filler for the Nav. Which is coming soon!</p>
          <Link to="/">Home </Link><Link to="plants">Plants </Link><Link to="/profile">Profile </Link><Link to="/trellis">Trellis </Link>
            </div>
        </nav>
    )
}
