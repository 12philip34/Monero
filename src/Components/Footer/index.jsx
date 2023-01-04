import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../../Images/moneroBg.png'
import style from './style.module.css'

 const Footer = () => {
    return (
        <CDBFooter className={style.shadow}>
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className={style.flexWrap}>
                    <CDBBox className={style.linkBox} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img alt="logo" src={logo} width="100px" />
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            We are creating High Quality Resources and tools to Aid developers during the
                            developement of their projects
                        </p>
                        <CDBBox display="flex" className="mt-4">
                            <CDBBtn flat color="dark">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className={style.linkBox} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <p className="h5 mb-4" style={{ fontWeight: '600',  }}>
                            Resources
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0'}}>
                             <span>About Monero</span>
                             <span>Moneropedia</span>
                             <span>Developers Guide</span>
                             <span>User Guide</span>
                            <span>Library</span>
                            <span>Downloads</span>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className={style.linkBox} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Reach Out
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <span>Workgrups</span>
                            <span>Hangout</span>
                            <span>Mailing List</span>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className={style.linkBox} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Community
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                             <span>Merchants & Exchanges</span>
                            <span>Stack Exchange</span>
                            <span>BitcoinTalk</span>
                            <span>Weblate</span>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox className={style.linkBox} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            The Monero Project
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <span>Open Alias</span>
                            <span>Monero Research Lab(MRL)</span>
                            <span>Press Kit</span>
                            <span>Community Crowdfunding System.</span>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">&copy; Monero, 20202 All rights reserved.</small>
                <label className={style.footerLast} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                    <a href="" className={style.linkUnderline}>Tor Onion services</a>
                    <a href="" className={style.linkUnderline}>legal</a>
                    <a href="" className={style.linkUnderline}>Source code</a>
                    <a href="" className={style.linkUnderline}>Sitemap</a>
                    <a href="" className={style.linkUnderline}>RSS Feed</a>
                </label>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;