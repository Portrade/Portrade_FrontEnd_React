import React, { useState } from "react";
import "./css/notice.css";

const BoardItem = ({ title, num, date }) => {
    return (
        <>
            <div className="notice-tab-post">
                <span>{num}</span>
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <div className="notice-tab-post-line"></div>
        </>
    );
};

const Notice = () => {
    const boardData = [
        { title: "예시용 데이터입니다.", date: "2021-01-01" },
        { title: "예시용 데이터입니다.", date: "2021-01-01" },
        { title: "예시용 데이터입니다.", date: "2021-01-01" },
    ];
    const [searchVal, setSearchVal] = useState();

    const inputHandler = ({ target: { value } }) => {
        setSearchVal(value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setSearchVal("");
    };

    return (
        <div className="notice-wrap">
            <div className="notice-board">
                <div className="notice-route">홈 > 고객센터 > 공지사항</div>
                <p className="notice-text">공지사항</p>

                <form className="notice-search-wrap" onSubmit={(e) => submitHandler(e)}>
                    <input
                        className="notice-search-input"
                        type="text"
                        placeholder="검색어를 입력해주세요"
                        onChange={(e) => inputHandler(e)}
                        value={searchVal}
                    ></input>
                    <i className="notice-search-icon" alt="search_black" />
                </form>

                <div className="notice-category-line"></div>
                <div className="notice-tab-category">
                    <span>NO</span>
                    <span>제목</span>
                    <span>등록일</span>
                </div>
                <div className="notice-category-line"></div>
                {boardData.map((item, index) => (
                    <BoardItem title={item.title} date={item.date} num={index} />
                ))}
                <div className="notice-page-btn">
                    <button className="notice-page-prevbtn">&lt;</button>
                    <button className="notice-page-prevbtn">1</button>
                    <button className="notice-page-prevbtn">&gt;</button>
                </div>
            </div>
        </div>
    );
};
export default Notice;
