import React from "react";
import ft from './Footer.module.css';
import insta from '../img/instagram-2-1.svg';
import whatsapp from '../img/whatsapp-icon.svg';
import { ReactSVG } from 'react-svg';
import bihance from '../img/binance-logo.svg';
import Logo from '../img/MY_Logo.png';

const Footer = () => {
    return <div className={ft.wrapper}>
        <div className={ft.container}>

            <div>
                <a href="https://wa.me/+79117885659" target="_blank">
                    {/* https://api.whatsapp.com/qr/MSBX42KCAHXUO1 */}

                    <ReactSVG src={whatsapp} className={ft.photo} data-title="whatsapp" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/olgagorbunova_3dviz/" target="_blank">
                    <ReactSVG src={insta} className={ft.photo} data-title="instagram" />
                </a>
            </div>
            <div>
                <a href="https://www.behance.net/olgagorbunova1" target="_blank">
                    <ReactSVG src={bihance} className={ft.photo} data-title="behance" />
                </a>
            </div>
        </div>

    </div>
}

export default Footer;