import React from 'react'
import {HashLink} from "react-router-hash-link"
import MainBtn from '../mainbtn/MainBtn'

export default function About(){
    return (
        <section className="about" id="about">
            <div className="about-text">
                <h2>Judo & Gym club "Dzuns"</h2>
                <p>
                    Funkcioniše na dve lokacije Doža Đerđa 4 gde se nalazi teretana i na "Spensu" gde je Džudo sala. Teretana se prostire na 250 m2, poseduje trenažere najboljeg kvaliteta za sve vrste treninga, kompletan kardio program kao i svlačionice sa tuševima. Članovima
                    je na raspolaganju prostor za relaksaciju pre i posle treninga kao i prijatna atmosfera.
                </p>
                <HashLink smooth to="#team">
                    <MainBtn />
                </HashLink>
            </div>
        </section>
    )
}