import React from "react"
import nextId from "react-id-generator"
import {FaFacebook, FaInstagram, FaGooglePlus} from "react-icons/fa"

export const navLinks = [
    {
        id: nextId(),
        url: "#home",
        text: "home"
    },
    {
        id: nextId(),
        url: "#offers",
        text: "usluge"
    },
    {
        id: nextId(),
        url: "#about",
        text: "o nama"
    },
    {
        id: nextId(),
        url: "#shop",
        text: "prodaja"
    },
    {
        id: nextId(),
        url: "#contact",
        text: "kontakt"
    }
]

export const navIcons = [
    {
        id: nextId(),
        url: "https://sr-rs.facebook.com/JudoNS2008",
        icon:  <FaFacebook />
    },
    {
        id: nextId(),
        url: "https://www.instagram.com/",
        icon: <FaInstagram />
    },
    {
        id: nextId(),
        url: "https://bit.ly/2TGnlJc",
        icon: <FaGooglePlus />
    }
]