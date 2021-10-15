import React from "react"
import MainBtn from "../mainbtn/MainBtn"
import VideoPlayer from "react-video-js-player"
import cuca01 from "../../images/cuca01.mp4"
import cuca02 from "../../images/cuca02.mp4"

export default function Seniors(){
    const videoSrc1 = cuca01;
    const videoSrc2 = cuca02;

    return (
        <section className="seniors">
            <article className="senior-text">
                <h3>Programi treninga za seniore</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quasi ut numquam voluptates deserunt a harum consectetur ea, quis earum, vel eos, dolore rerum aliquam debitis ducimus cupiditate! Ipsa dolorum pariatur ducimus fuga obcaecati excepturi delectus dolores animi provident est unde voluptates numquam minus . </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab illum aperiam necessitatibus sint harum veritatis delectus, vel quod quae assumenda officia. Quos eveniet laboriosam incidunt distinctio, obcaecati maiores veritatis iure maxime ducimus animi commodi qui ullam eum tenetur ipsum sequi reprehenderit hic quasi! </p>
                <MainBtn />
            </article>
            <article className="senior-video">
                <VideoPlayer src={videoSrc1}/>
            </article>
            <article className="senior-video">
                <VideoPlayer src={videoSrc2}/>
            </article>
        </section>
    )
}