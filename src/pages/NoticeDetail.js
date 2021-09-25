import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/noticeDetail.css";

const BoardItem = ({ title, num, date }) => {
    return (
        <>
            <div className="noticeDetail-tab-post">
                <span>{num}</span>
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <div className="noticeDetail-tab-post-line"></div>
        </>
    );
};

const Notice = () => {
    const boardData = {
        title: "예시용 데이터입니다.",
        date: "2021-01-01",
        main: "안녕하세요. 여러분의 작품을 더 나은 전시장으로 이어주는 링커벨입니다.포트레이드를 이용해 주시는 여러분께 감사의 말씀 드리며, 아래와 같이 사이트의 레이아웃이 일부 변경되오니 참고하시길 바랍니다.",
    };

    return (
        <div className="noticeDetail-wrap">
            <div className="noticeDetail-board">
                <div className="noticeDetail-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 공지사항</div>
                <p className="noticeDetail-text">공지사항</p>
                <div className="noticeDetail-category-line"></div>
                <div className="noticeDetail-tab-category">
                    <span>NO</span>
                    <span>{boardData.title}</span>
                    <span>{boardData.date}</span>
                </div>
                <div className="noticeDetail-category-line"></div>
                <div className="noticeDetail-main">{boardData.main}</div>
                <div className="noticeDetail-category-line"></div>
                <div className="noticeDetail-tab-category">
                    <span>다음</span>
                    <span>{boardData.title}</span>
                    <span>{boardData.date}</span>
                </div>
                <div className="noticeDetail-category-line"></div>
                <div className="noticeDetail-tab-category">
                    <span>이전</span>
                    <span>{boardData.title}</span>
                    <span>{boardData.date}</span>
                </div>
                <div className="noticeDetail-category-line"></div>
            </div>
        </div>
    );
};
export default Notice;
