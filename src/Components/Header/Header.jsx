import React from 'react';
import head from './Header.module.css'
import Logo from '../img/MY_Logo.png'

const Header = () => {
    return <div className = {head.name}> 
        <img src={Logo} alt="" className={head.logoImg} />
    </div>
    
}

export default Header;