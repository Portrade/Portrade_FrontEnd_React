import React, { useState } from "react";
import "./css/noticeDetail.css";

const Notice = () => {
    const boardData = {
        title: "예시용 데이터입니다.",
        date: "2021-01-01",
        main: "안녕하세요. 여러분의 작품을 더 나은 전시장으로 이어주는 링커벨입니다.포트레이드를 이용해 주시는 여러분께 감사의 말씀 드리며, 아래와 같이 사이트의 레이아웃이 일부 변경되오니 참고하시길 바랍니다.",
    };
    const data = `<h2 class="ql-indent-1">asssssssssssssssssssssssssssssssssssssssasdfasdfasdfsdfsadf<span style="color: rgb(178, 107, 0);">asdfsadfsadfasdf</span></h2><ul><li><strong>qweqeqe</strong></li><li><strong>asdasd</strong></li></ul><p><strong>asdasd</strong></p>`;

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
                <div className="noticeDetail-main" dangerouslySetInnerHTML={{ __html: data }}></div>
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
