import React from "react"
import nextId from "react-id-generator"
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import darjan from "../../images/dasha.jpg"
import deki from "../../images/deki.jpg"
import vesna from "../../images/vesna.jpg"
import mikica from "../../images/mikica.jpg"

export const teamMembers = [
    {
        id: nextId(),
        img: darjan,
        name: "Darjan Ničić",
        title: "Gym manager",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: nextId(),
        img: deki,
        name: "Deki Ničić",
        title: "Generalni direktor",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: nextId(),
        img: vesna,
        name: "Vesna Ničić",
        title: "Project manager",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    },
    {
        id: nextId(),
        img: mikica,
        name: "Mikica Ničić",
        title: "Predsjednik",
        socialIcons: [
            {id: nextId(), url:"https://twitter.com/login?lang=en", icon: <FaTwitter/>},
            {id: nextId(), url:"https://www.facebook.com/", icon: <FaFacebook/>},
            {id: nextId(), url:"https://www.instagram.com/accounts/login/", icon: <FaInstagram/>}
        ]
    }
]