import React from "react"
import {offers} from "./data"

export default function Offers(){
    return (
        <section className="offers" id="offers">
            <h1>Naše usluge</h1>
            <div className="offers-wrapper">
                {offers.map(function(offer){
                    const {id, img, text} = offer;
                    return (
                        <article
                            key={id}
                            className="offer">
                            <div>
                                <img src={img} alt="offer"/>
                                <p>{text}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}