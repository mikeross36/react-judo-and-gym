import React from "react"
import {teamMembers} from "./data"

export default function Team(){
    return (
        <section className="team" id="team">
            <h2>Naš tim</h2>
            <div className="team-wrapper">
                {teamMembers.map(function(member){
                    const {id, img, name, title, socialIcons} = member;
                    return (
                        <article 
                            key={id}
                            className="team-member">
                            <img src={img} alt="memeber"/>
                            <div className="img-footer">
                                <h4>{name}</h4>
                                <h5>{title}</h5>
                                <div className="social-icons">
                                    {socialIcons.map(function(socIcon){
                                        const {id, url, icon} = socIcon;
                                        return (
                                            <a 
                                                key={id}
                                                href={url} 
                                                className="soc-link">
                                                {icon}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}