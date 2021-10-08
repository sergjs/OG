import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import st from './Slider.module.css'

const Slider = () => {
    return <div className={st.wrapper}>
        <Carousel pause='false'
            className={st.item}    >
            <Carousel.Item className={st.item} interval={3000}>
                <img src={pic2}
                    alt="First slide"
                    className={st.blog_foto}
                />
            </Carousel.Item>
            <Carousel.Item className={st.item} interval={3000}>
                <img className={st.blog_foto}
                    src={pic3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className={st.item} interval={3000}>
                <img
                    className={st.blog_foto}
                    src={pic1}
                    alt="third slide"
                />
            </Carousel.Item>
        </Carousel>
        <div className={st.text_container}>
            <h2 className={st.text_viewer}> <b>3D визуализация <br />от Ольги Горбуновой</b></h2>
        </div>
    </div>
}

export default Slider;