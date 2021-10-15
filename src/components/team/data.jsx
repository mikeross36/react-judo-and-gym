import React from "react"

import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import darjan from "../../images/dasha.jpg"
import deki from "../../images/deki.jpg"
import vesna from "../../images/vesna.jpg"
import mikica from "../../images/mikica.jpg"

export const teamMembers = [
    {
        id: 1,
        img: darjan,
        name: "Darjan Ničić",
        title: "Gym manager",
        socialIcons: [
            {url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: 2,
        img: deki,
        name: "Deki Ničić",
        title: "Generalni direktor",
        socialIcons: [
            {url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: 3,
        img: vesna,
        name: "Vesna Ničić",
        title: "Project manager",
        socialIcons: [
            {url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: 4,
        img: mikica,
        name: "Mikica Ničić",
        title: "Predsjednik",
        socialIcons: [
            {url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    }
]