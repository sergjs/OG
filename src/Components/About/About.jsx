import React from "react";
import ab from './About.module.css';

const About = () => {
    return <div className={ab.wrapper}>
        <div className={ab.blog_foto}></div>
        <div className={ab.text1}>Меня зовут Ольга Горбунова. <br />
         Я - профессиональный 3D визуализатор с высшим художественным образованием и практикой работы дизайнером интерьеров и проектировщиком.<br />
         Закончила СпбГХПА им. Штиглица, кафедру интерьеров и оборудование. <br />
         Повышала квалификацию в Centeral Saint Martins в Лондоне. <br />
         Во всех своих проектах преследую главную цель - создать идеальное 3D пространство, в котором соблюдаются и учитываются все пожелания 
        клиента. </div>
        <div className={ab.n_b}>Мои контакты: bkub99@gmail.com </div>
    </div>
}

export default About;