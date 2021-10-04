import React from 'react';
import {Carousel} from 'react-bootstrap';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import st from './Slider.module.css'

const Slider = () => {
    return <Carousel pause='false'
    className={st.item}    >
        <Carousel.Item className={st.item} interval = {3000}>
            <img src={pic2}
                alt="First slide"
                className={st.blog_foto}
                />
            <Carousel.Caption>
                <h3>New messageNew messageNew message</h3>
                <p>message message messagemessagemessage</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className={st.item} interval = {3000}>
            <img  className={st.blog_foto}
            src={pic3}
                alt="Second slide"
                  />
            <Carousel.Caption>
                <h3>New messageNew messageNew message</h3>
                <p>message message messagemessagemessage</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className={st.item} interval = {3000}>
            <img 
             className={st.blog_foto}
            src={pic1}
                alt="third slide"
                 />
            <Carousel.Caption>
                <h3>New messageNew messageNew message</h3>
                <p>message message messagemessagemessage</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default Slider;