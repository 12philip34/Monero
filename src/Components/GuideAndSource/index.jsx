import React from 'react'
import style from './style.module.css'

const GuideAndResources = (props) => (
  <div>
      <div className={style.guideAndResourcesBox}>
          <div className={style.left}>
              <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Guides and Resources</h1>
              <p data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                  The community has put together
                  a vast amount of resources and documentation.
                  Users can find useful info and guides
                  about common configurations and tips in the 'User Guides' section.</p>
              <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  Developers can find everything they need
                  to build a service based on Monero or
                  simply communicate with the network in the 'Developer Guides'.
                  The Library offers publications and books downloadable for
                  free, including the full 'Mastering Monero' and 'Zero to Monero' books.</p>
              <span data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <button><a href="">user Guide</a></button>
                  <button><a href="">Developers Guides</a></button>
                  <button><a href="">Library</a></button>
              </span>
          </div>
          <div className={style.right} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
              <h1>Moneropedia</h1>
              <p>
                  Would you like to look up the meanings
                  of the terms and concepts used in Monero?
                  Here you will find an alphabetical
                  guide to terms and their meanings.
              </p>
              <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"><a href="">Read Moneropedia</a></button>
          </div>
      </div>
  </div>
);

export default GuideAndResources;