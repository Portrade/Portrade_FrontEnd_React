import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/notice.css";
import { noticeApi } from "../_api";

const BoardItem = ({ title, index, createdDate, viewCount }) => {
    return (
        <>
            <div className="notice-tab-post">
                <span>{index}</span>
                <span>{title}</span>
                <span>{createdDate}</span>
                <span>{viewCount}</span>
            </div>
            <div className="notice-tab-post-line"></div>
        </>
    );
};

const Notice = () => {
    const [noticeList, setNoticeList] = useState([]);
    const [inputVal, setinputVal] = useState("");
    const [searchVal, setSearchVal] = useState("");
    const [selectedBtn, setBtn] = useState(1);
    const [btnJSX, setBtnJSX] = useState();
    const [maxPage, setMaxPage] = useState();

    useEffect(() => {
        async function fetchData() {
            let {
                data: {
                    notices,
                    page: { totalPage },
                },
            } = await noticeApi.getList(selectedBtn, searchVal);
            setNoticeList(notices);
            setMaxPage(totalPage);
            setBtnJSX(pageBtnHandler(totalPage));
        }
        fetchData();
    }, [selectedBtn, searchVal]);

    const inputHandler = ({ target: { value } }) => {
        setinputVal(value);
    };

    const submitHandler = (e) => {
        setSearchVal(inputVal);
        e.preventDefault();
    };

    const pageBtnHandler = (maxPage) => {
        let btn = [];
        for (let i = 1; i <= maxPage; i++) {
            btn.push(
                <button
                    key={i}
                    onClick={() => {
                        setBtn(i);
                    }}
                    className="notice-page-prevbtn"
                >
                    {i}
                </button>
            );
        }
        return btn;
    };

    const leftBtnHandler = () => {
        if (selectedBtn !== 1) setBtn(selectedBtn - 1);
    };
    const rightBtnHandler = () => {
        if (selectedBtn !== maxPage) setBtn(selectedBtn + 1);
    };

    return (
        <div className="notice-wrap">
            <div className="notice-board">
                <div className="notice-route">??? &nbsp;&gt;&nbsp; ???????????? &nbsp; &gt;&nbsp; ????????????</div>
                <p className="notice-text">????????????</p>

                <form className="notice-search-wrap" onSubmit={(e) => submitHandler(e)}>
                    <input className="notice-search-input" type="text" placeholder="???????????? ??????????????????" onChange={(e) => inputHandler(e)} value={inputVal || ""}></input>
                    <i className="notice-search-icon" alt="search_black" />
                </form>

                <div className="notice-category-line"></div>
                <div className="notice-tab-category">
                    <span>NO</span>
                    <span>??????</span>
                    <span>?????????</span>
                    <span>?????????</span>
                </div>
                <div className="notice-category-line"></div>
                {noticeList === [] ? (
                    <div className="notice-loadingDiv"></div>
                ) : noticeList === undefined ? (
                    <div>??????????????? ????????????.</div>
                ) : (
                    noticeList.map((item, index) => (
                        <Link to={`notice/${item.id}`} key={index}>
                            <BoardItem index={index + 1} title={item.title} createdDate={item.createdDate.substr(0, 10)} viewCount={item.viewCount} />
                        </Link>
                    ))
                )}
                <div className="notice-page-btn">
                    <button
                        onClick={() => {
                            leftBtnHandler();
                        }}
                        className="notice-page-prevbtn"
                    >
                        &lt;
                    </button>
                    {btnJSX ? btnJSX : null}
                    <button
                        onClick={() => {
                            rightBtnHandler();
                        }}
                        className="notice-page-prevbtn"
                    >
                        &gt;
                    </button>
                    <Link to={"/notice/post"}>
                        <button className="notice-register-btn">???????????? ??????</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Notice;
