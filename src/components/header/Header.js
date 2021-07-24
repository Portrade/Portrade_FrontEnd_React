import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/header.css";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    /**
     * TBD ver.2
     * const [isLogin, setIsLogin] = useState(true);
     */

    return (
        <header>
            <div className="logo">
                <Link to="/">PORTRADE</Link>
            </div>

            <nav className="nav-bar">
                <Link to="/portfolio">포트폴리오 등록</Link>
                <Link to="/suggestion">추천 기업</Link>
                <Link to="/notice">공지사항 및 문의</Link>
            </nav>

            <div className="search-wrap">
                <input type="text"/>
                <button>search</button>
            </div>

            <div className="nav-bar">
                {isLogin ? (<div>로그아웃</div>) : (<Link to="/login">로그인</Link>)}
                {isLogin ? (<Link to="/mypage">마이페이지</Link>) : (<Link to="/register">회원가입</Link>)}
            </div>
        </header>
    );
};

export default Header;