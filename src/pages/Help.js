import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { noticeApi, faqApi } from "../_api";

import "./css/help.css";

const Help = () => {
    const [noticeList, setNoticeList] = useState([]);
    const [FAQList, setFAQList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let {
                data: { notices },
            } = await noticeApi.getList(1, "");
            setNoticeList(notices);
            let {
                data: { faqs },
            } = await faqApi.getList();
            setFAQList(faqs);
        }
        fetchData();
    }, []);

    const NoticeComponent = () => (
        <div className="help-notice-desc">
            {noticeList.slice(0, 5).map((item, index) => (
                <p key={index}>
                    <Link to={`notice/${item.id}`}>{item.title}</Link>
                </p>
            ))}
        </div>
    );
    const FAQComponent = () => (
        <div className="help-notice-desc">
            {FAQList.slice(0, 5).map((item, index) => (
                <p key={index}>
                    <Link to={`faq`}>{item.title}</Link>
                </p>
            ))}
        </div>
    );

    return (
        <div className="help-container">
            <p className="help-question-text">포트레이드에 궁금하신 점이 있으신가요?</p>
            <div className="help-desc-container">
                <div className="help-desc">
                    <p>회원 정보 관리</p>
                    <p>회원 정보 변경</p>
                    <p>아이디 / 비밀번호 찾기</p>
                </div>

                <div className="help-desc">
                    <p>포트폴리오 관리</p>
                    <p>내 포트폴리오 관리</p>
                    <p>포트폴리오 열람 기록</p>
                </div>
            </div>

            <div className="help-notice-box">
                <div className="help-notice">
                    <div className="help-notice-title">
                        <span>공지사항</span>
                        <span>
                            <Link to="/notice">더보기</Link>
                        </span>
                    </div>
                    <NoticeComponent />
                </div>

                <div className="help-notice">
                    <div className="help-notice-title">
                        <span>자주 묻는 질문</span>
                        <span>
                            <Link to="/FAQ">더보기</Link>
                        </span>
                    </div>
                    <FAQComponent />
                </div>
            </div>

            <div className="help-banner">
                <div className="help-banner-text">
                    <p>궁금한 내용에 대한 답변을 찾을 수 없나요?</p>
                    <p>
                        <span>링커벨</span>에게 문의를 해주세요.
                    </p>
                </div>
                <Link className="help-banner-button" to="/inquiry/post">
                    1:1 문의하기
                </Link>
                <Link className="help-banner-button" to="/inquiry">
                    문의 내역 조회
                </Link>
            </div>

            <div className="help-service-container">
                <p>서비스 소개</p>
                <div className="help-service-content">
                    <div className="help-service">
                        <img alt="1" src={require("../images/help/slogan_1.png").default} />
                        <p>포트폴리오 jpg 변환</p>
                    </div>
                    <div className="help-service">
                        <img alt="1" src={require("../images/help/slogan_2.png").default} />
                        <p>포트폴리오 업로드</p>
                    </div>
                    <div className="help-service">
                        <img alt="1" src={require("../images/help/slogan_3.png").default} />
                        <p>외부 사이트 연동</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
