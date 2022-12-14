import React from 'react'
import style from './style.module.css'
import video from '../../Images/Monero_Promo.m4v'

function BlogLinks (props) {
    return (
        <div>
            <div className={style.blogLinkBox}>
                <div className={style.blogLink}>
                    <span data-aos="flip-up">
                        <a href="">Get Started</a>
                    </span>
                    <span data-aos="flip-up">
                        <a href="">Downloads</a>
                    </span>
                    <span data-aos="flip-up">
                        <a href="">Blogs</a>
                    </span>
                    <span data-aos="flip-up">
                        <a href="">Community</a>
                    </span>
                    <span data-aos="flip-up">
                        <a href="">Resources</a>
                    </span>
                </div>
                <div className={style.moneroVideo}>
                    <span><a href="#www" className={style.hoverUnderline}>Looking for more explanatory Videos?</a></span>
                    <video autoPlay muted loop className={style.video}>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default BlogLinks;