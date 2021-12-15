import React from "react"
import logo from "../../images/logo.jpg"
import {navLinks, navIcons} from "./data"
import {HashLink} from "react-router-hash-link"

export default function Header({toggleMobileMenu, showMobileMenu, closeMobileMenu}){
    return(
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <button className="burger-btn" onClick={toggleMobileMenu}>
                    <figure className={`bar1 ${showMobileMenu && "open"}`}></figure>
                    <figure className={`bar2 ${showMobileMenu && "open"}`}></figure>
                    <figure className={`bar3 ${showMobileMenu && "open"}`}></figure>
                </button>
                <ul className="desktop-links" data-testid="desktop-links">
                    {navLinks.map(function(link){
                        const {id, url,text} = link;
                        return (
                            <li key={id} className="desk-link-item">
                                <HashLink
                                    smooth to={url}>
                                    {text}
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
                <ul className="nav-social-icons" data-testid="social-icons">
                    {navIcons.map(function(navIcon){
                        const {id, url, icon} = navIcon;
                        return(
                            <li key={id} className="soc-icon">
                                <a href={url}
                                    target="_blank"
                                    rel="noreferrer">
                                    {icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul data-testid="mobile-links" className={`mobile-links ${showMobileMenu ? "fade-in" : "fade-out"}`}>
                {navLinks.map(function(link){
                    const {id, url, text} = link;
                    return(
                        <li 
                            key={id} 
                            className="mob-link-item">
                            <HashLink
                                onClick={closeMobileMenu}
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