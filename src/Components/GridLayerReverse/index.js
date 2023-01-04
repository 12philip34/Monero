import React, { useEffect } from 'react';
import style from './style.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function GridLayer (props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className={style.gridContainerReverse}>
            <div className={style.rightLayerReverse} data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1500">
                <img src={props.ImageReverse} alt="image.png"/>
            </div>
                <div className={style.leftLayerReverse} data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
                    <h3 className={style.headerReverse} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">{props.headerReverse}</h3>
                    <p className={style.paragraphReverse} data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500">{props.paragraphReverse}</p>
                    <button className={style.buttonReverse} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500"><a href="">{props.buttonReverse}</a></button>
                </div>
            </div>
        </div>
    );
}

export default GridLayer;