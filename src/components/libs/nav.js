import React from 'react'
import '../../Assets/css/nav.css'

import logoRed from '../../Assets/Images/logo-red.png'

export default function nav() {
    return (
        <div className="nav__div">
            <img src={logoRed} width="140px" alt="logo"/>
        </div>
    )
}
