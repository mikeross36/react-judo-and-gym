import React from "react"
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa"

export default function Contact(){
    return (
        <>
            <section className="contact" id="contact">   
                <address>
                    <div className="contact-details">
                        <div className="contact-icon">
                            <FaHome className="icon" />
                        </div>
                        <div className="contact-text">
                            <h4>Posetite nas</h4>
                            <h5>Doža Đerđa 4</h5>
                            <h5>Novi Sad, Serbia</h5>
                            <h5>ponedeljak - subota 8.00 - 22.00</h5>
                            <h5>nedelja 15.00 - 22.00</h5>
                        </div>
                    </div>
                    <div className="contact-details">
                        <div className="contact-icon">
                            <FaPhoneSquareAlt className="icon" />
                        </div>
                        <div className="contact-text">
                            <h4>Pozovite nas</h4>
                            <h5>Generalni direktor</h5>
                            <h5>+381 65 554 05 95</h5>
                        </div>
                    </div>
                </address>

                <div className="contact-form">
                    <form className="submit-form">
                        <input type="text" placeholder="ime..."/>
                        <input type="text" placeholder="prezime..."/>
                        <input type="email" placeholder="email..."/>
                        <textarea name="comment" cols="30" rows="3" placeholder="poruka..."></textarea>
                        <button className="submit-btn">pošalji</button>
                    </form>
                </div>
            </section>
            <footer>
                <a href="https://vladimir-monarov-portfolio.netlify.app/" className="footer-text" target="_blank" rel="noreferrer"></a>
                <p>&copy;Copyright 2020 DodaDesign all rights reserved</p>
            </footer>
        </>
    )
}