import React from 'react';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer text-center pt-3">
            <p>&copy; Plantsy 2021 ~<Link to="./thanks"> Grow up!</Link></p>
        </footer>
    )
}
