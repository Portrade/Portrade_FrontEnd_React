import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/notice.css";

const BoardItem = ({ title, num, date, views }) => {
    return (
        <>
            <div className="notice-tab-post">
                <span>{num}</span>
                <span>{title}</span>
                <span>{date}</span>
                <span>{views}</span>
            </div>
            <div className="notice-tab-post-line"></div>
        </>
    );
};

const Notice = () => {
    const boardData = [
        { title: "예시용 데이터입니다.", date: "2021-01-01", views: "12" },
        { title: "제목 검색", date: "2021-01-01", views: "12" },
        { title: "공지사항2", date: "2021-01-01", views: "12" },
    ];
    const [inputVal, setinputVal] = useState();
    const [searchVal, setSearchVal] = useState("");

    const inputHandler = ({ target: { value } }) => {
        setinputVal(value);
    };

    const submitHandler = (e) => {
        setSearchVal(inputVal);
        e.preventDefault();
        setinputVal("");
    };

    return (
        <div className="notice-wrap">
            <div className="notice-board">
                <div className="notice-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 공지사항</div>
                <p className="notice-text">공지사항</p>

                <form className="notice-search-wrap" onSubmit={(e) => submitHandler(e)}>
                    <input className="notice-search-input" type="text" placeholder="검색어를 입력해주세요" onChange={(e) => inputHandler(e)} value={inputVal}></input>
                    <i className="notice-search-icon" alt="search_black" />
                </form>

                <div className="notice-category-line"></div>
                <div className="notice-tab-category">
                    <span>NO</span>
                    <span>제목</span>
                    <span>등록일</span>
                    <span>조회수</span>
                </div>
                <div className="notice-category-line"></div>
                {boardData
                    .filter((item) => item.title.includes(searchVal))
                    .map((item, index) => (
                        <Link to={`notice/${index}`}>
                            <BoardItem title={item.title} date={item.date} num={index} views={item.views} />
                        </Link>
                    ))}
                <div className="notice-page-btn">
                    <button className="notice-page-prevbtn">&lt;</button>
                    <button className="notice-page-prevbtn">1</button>
                    <button className="notice-page-prevbtn">&gt;</button>
                    <Link to={"/notice/post"}>
                        <button className="notice-register-btn">공지사항 등록</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Notice;
