import React from "react";
import ab from './About.module.css';
import foto from '../img/homer.jpg'

const About = () => {
    return <div className={ab.wrapper}>
        <div className={ab.blog_foto}> <img src={foto} alt="" className={ab.ava} /></div>
        <div className={ab.text1}>Меня зовут Ольга Горбунова. Я - профессиональный 3D визуализатор с высшим 
        художественным образованием и практикой работы дизайнером интерьеров и проектировщиком. Закончила СпбГХПА им. Штиглица 
        кафедру интерьеров и оборудование. Повышала квалификацию в Centeral Saint Martins  в Лондоне. Во всех своих проектах преследую
        главную цель - создать идеальное 3D пространство, в котором соблюдены и учитываются все пожелания клиента. </div>
        <div className={ab.n_b}>Мои контакты: 09 99 525 55 55 </div>
    </div>
}

export default About;