import React from 'react';
import style from './style.module.css'

function GridLayer (props) {
    return (
        <div>
            <div className={style.gridContainer}>
                <div className={style.leftLayer} data-aos="fade-up" data-aos-duration="3000">
                    <h3 className={style.header} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">{props.header}</h3>
                    <p className={style.paragraph} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">{props.paragraph}</p>
                    <button className={style.button} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"><a href="">{props.button}</a></button>
                </div>
                <div className={style.rightLayer} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <img src={props.Image} alt="image.png"/>
                </div>
            </div>
        </div>
    );
}

export default GridLayer;