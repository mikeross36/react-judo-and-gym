import React from "react"
import logo from "../../images/logo.jpg"
import {navLinks} from "./data"
import {HashLink} from "react-router-hash-link"
import {navIcons} from "./data"

export default function App(){
    const [showMobileMenu, setShowMobileMenu] = React.useState(false)

    const toggleMobMenu = function(){
        setShowMobileMenu(!showMobileMenu)
    };

    const closeMobMenu = function(){
        setShowMobileMenu(false)
    };

    return(
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <div className="burger-btn" onClick={toggleMobMenu}>
                    <div className={`bar1 ${showMobileMenu && "open"}`}></div>
                    <div className={`bar2 ${showMobileMenu && "open"}`}></div>
                    <div className={`bar3 ${showMobileMenu && "open"}`}></div>
                </div>
                <ul className="desktop-links">
                    {navLinks.map(function(link){
                        const {id, url, text} = link;
                        return (
                            <li key={id} className="link-item">
                                <HashLink
                                    smooth to={url}>
                                        {text}
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
                <ul className="nav-social-icons">
                    {navIcons.map(function(navIcon){
                        const {id, url, icon} = navIcon;
                        return (
                            <li key={id} className="soc-icon">
                                <a  
                                    href={url}
                                    target="_blank"
                                    rel="noereferrer">
                                        {icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className={`mobile-links ${showMobileMenu ? "fade-in" : "fade-out"}`}>
                {navLinks.map(function(link){
                    const {id, url, text} = link;
                    return (
                        <li 
                            key={id}
                            className="mob-link-item">
                            <HashLink
                                onClick={closeMobMenu}
                                smooth to={url}>
                                {text}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}