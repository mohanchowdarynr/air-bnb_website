import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img 
             className="header__icon"
             src="https://i.pinimg.com/564x/d2/91/9b/d2919b06c9d2c1c10be3941f14e038ed.jpg"
             alt="Hell"
            />
            </Link>
            <div className="header__center">
                <input  type="text" placeholder="Start your search"/>
                <SearchIcon  />
            </div>
            <div className="header__right">
                <p>Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
        
    )
}

export default Header
