import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";
// import { creative_commons from "../../images/footer/creative_commons.png";
import copyright1 from "../../images/footer/copyright1.png";
import copyright2 from "../../images/footer/copyright2.png";
import copyright3 from "../../images/footer/copyright3.png";
import copyright4 from "../../images/footer/copyright4.png";


const Footer = () => {


    return (
        <footer>
            <div className="footer-wrap">
                <div className="footer-corp">
                    <div className="footer-logo"><Link to="/">PORTRADE</Link></div>
                        {/*  onClick={() => window.scrollTo({top: 0, left: 0, behavior:'smooth'})} */}
                    
                    <div className="footer-copyright">
                        <div>PORTRADE©2021.Linkerbell.ALL RIGHTS RESERVED.</div>
                        <div>PORTRADE는 7명의 팀원이 제작한 포트폴리오 사이트 입니다.</div>
                    </div>

                    <img src={copyright1} alt="copyright" />
                    <img src={copyright2} alt="copyright" />
                    <img src={copyright3} alt="copyright" />
                    <img src={copyright4} alt="copyright" />
                </div>
                
                <nav className="footer-nav-bar">
                    <Link to="/introduce">포트레이드 소개</Link>
                    <Link to="/portfolio">포트폴리오</Link>
                    <Link to="/suggestion">추천기업</Link>
                    <Link to="/help">고객센터</Link>
                </nav>
                
                <div className="footer-contact">
                    <p>CONTACT</p>
                    <div className="footer-contact-box-wrap">
                        <div className="footer-contact-box"></div>
                        <div className="footer-contact-box"></div>
                        <div className="footer-contact-box"></div>
                        <div className="footer-contact-box"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
