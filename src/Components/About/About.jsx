import React from "react";
import ab from './About.module.css';
import foto from '../img/homer.jpg'

const About = () => {
    return <div className={ab.wrapper}>
        <div className={ab.ft}> <img src={foto} alt="" className={ab.ft} /></div>
        <div className={ab.text1}>Главный герой — 27-летний Илья Горюнов,
            семь лет отсидевший в тюрьме по ложному обвинению в
            распространении   наркотиков. Когда Илья выходит на свободу, он
            понимает, что прежняя жизнь, по которой он тосковал, разрушена,
            вернуться к ней он больше не сможет. Хотя он не </div>
        <div className={ab.nb}>+01 989 555 56 56</div>
    </div>
}

export default About;