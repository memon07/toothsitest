import React from 'react'
import '../../Assets/css/nav.css'
import { Link } from "react-router-dom";

import logoRed from '../../Assets/Images/logo-red.png'

export default function nav() {
    return (
        <div className="nav__div">
            <Link to="/">
                <img src={logoRed} width="140px" alt="logo"/>
            </Link>
        </div>
    )
}
