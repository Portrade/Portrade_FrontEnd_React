import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";
// import { creative_commons from "../../images/footer/creative_commons.png";
import copyright1 from "../../images/footer/copyright1.png";
import copyright2 from "../../images/footer/copyright2.png";
import copyright3 from "../../images/footer/copyright3.png";
import copyright4 from "../../images/footer/copyright4.png";
import facebook from "../../images/footer/facebook.png";
import github from "../../images/footer/github.png";
import instagram from "../../images/footer/instagram.png";
import mail from "../../images/footer/mail.png";

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
                    <nav className="footer-nav-bar-col">
                        <Link to="/introduce" className="footer-nav-bar-col-title">포트레이드 소개</Link>
                        <Link to="/mypage">마이페이지</Link>
                        <Link>포트폴리오 관리</Link>
                    </nav>
                    <nav className="footer-nav-bar-col">
                        <Link to="/portfolio" className="footer-nav-bar-col-title">포트폴리오</Link>
                        <Link>포트폴리오 등록</Link>
                        <Link>분야별 포트폴리오</Link>
                        <Link>제작자 검색하기</Link>
                    </nav>
                    <nav className="footer-nav-bar-col">
                        <Link to="/suggestion" className="footer-nav-bar-col-title">추천기업</Link>
                        <Link>포트레이드 추천공고</Link>
                        <Link>분야별 공고</Link>
                    </nav>
                    <nav className="footer-nav-bar-col">
                        <Link to="/help" className="footer-nav-bar-col-title footer-nav-bar-col-title-last">고객센터</Link>
                        <Link to="/notice">공지사항</Link>
                        <Link to="/FAQ">자주 묻는 질문</Link>
                        <Link to="/inquiry/post">1:1 문의</Link>
                    </nav>
                </nav>
                
                <div className="footer-contact">
                    <div className="footer-contact-box-wrap">
                        <div className="footer-contact-logo">CONTACT</div>
                        <Link to=""><img src={instagram} alt="instagram" /></Link>
                        <Link to=""><img src={facebook} alt="facebook" /></Link>
                        <Link to=""><img src={mail} alt="mail" /></Link>
                        <Link to=""><img src={github} alt="github" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
