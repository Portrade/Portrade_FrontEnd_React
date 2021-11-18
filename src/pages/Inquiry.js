import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/inquiry.css";
import { inquiryApi } from "../_api";

const BoardItem = ({ title, index, createdDate, viewCount }) => {
    return (
        <>
            <div className="inquiry-tab-post">
                <span>{index}</span>
                <span>{title}</span>
                <span>{createdDate}</span>
            </div>
            <div className="inquiry-tab-post-line"></div>
        </>
    );
};

const Inquiry = () => {
    const [inquiryList, setInquiryList] = useState([]);
    const [inputVal, setinputVal] = useState("");
    const [keyword, setSearchVal] = useState("");
    const [selectedBtn, setBtn] = useState(1);
    const [btnJSX, setBtnJSX] = useState();
    const [maxPage, setMaxPage] = useState();
    const [typeArr, setTypeArr] = useState([1, 0, 0]);

    useEffect(() => {
        async function fetchData() {
            let type;
            if (typeArr[0] === 1) type = "all";
            else if (typeArr[1] === 1) type = "answsered";
            else type = "unanswered";
            const encodeKeyword = encodeURIComponent(keyword);
            let {
                data: {
                    qnas,
                    page: { totalPage },
                },
            } = await inquiryApi.getList(selectedBtn, type, encodeKeyword);

            setInquiryList(qnas);
            setMaxPage(totalPage);
            setBtnJSX(pageBtnHandler(totalPage));
        }
        fetchData();
    }, [typeArr, selectedBtn, keyword]);

    const inputHandler = ({ target: { value } }) => {
        setinputVal(value);
    };

    const submitHandler = (e) => {
        setSearchVal(inputVal);
        e.preventDefault();
    };

    const pageBtnHandler = (page) => {
        let btn = [];
        for (let i = 1; i <= page; i++) {
            btn.push(
                <button
                    key={i}
                    onClick={() => {
                        setBtn(i);
                    }}
                    className="inquiry-page-prevbtn"
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
        console.log(maxPage);
        if (selectedBtn !== maxPage) setBtn(selectedBtn + 1);
    };

    const typeHandler = (index) => {
        let arr = [0, 0, 0];
        arr[index] = 1;
        setTypeArr(arr);
    };

    return (
        <div className="inquiry-wrap">
            <div className="inquiry-board">
                <div className="inquiry-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 1:1 문의</div>
                <p className="inquiry-text"> 1:1 문의</p>
                <div className="inquiry-option-section">
                    <div className="inquiry-button-section">
                        <button
                            onClick={() => {
                                typeHandler(0);
                            }}
                            className={typeArr[0] ? "inquiry-category inquiry-category-click" : "inquiry-category"}
                        >
                            전체
                        </button>
                        <button
                            onClick={() => {
                                typeHandler(1);
                            }}
                            className={typeArr[1] ? "inquiry-category inquiry-category-click" : "inquiry-category"}
                        >
                            답변 완료
                        </button>
                        <button
                            onClick={() => {
                                typeHandler(2);
                            }}
                            className={typeArr[2] ? "inquiry-category inquiry-category-click" : "inquiry-category"}
                        >
                            미답변
                        </button>
                    </div>
                    <form className="inquiry-search-wrap" onSubmit={(e) => submitHandler(e)}>
                        <input className="inquiry-search-input" type="text" placeholder="검색어를 입력해주세요" onChange={(e) => inputHandler(e)} value={inputVal}></input>
                        <i className="inquiry-search-icon" alt="search_black" />
                    </form>
                </div>

                <div className="inquiry-category-line"></div>
                <div className="inquiry-tab-category">
                    <span>NO</span>
                    <span>제목</span>
                    <span>등록일</span>
                </div>
                <div className="inquiry-category-line"></div>
                {inquiryList === [] ? (
                    <div className="inquiry-loadingDiv"></div>
                ) : inquiryList === undefined ? (
                    <div className="inquiry-no-notice">문의 사항이 없습니다.</div>
                ) : (
                    inquiryList.map((item, index) => (
                        <Link to={`inquiry/${item.id}`} key={index}>
                            <BoardItem index={index + 1} title={item.title} createdDate={item.createdDate.substr(0, 10)} />
                        </Link>
                    ))
                )}
                <div className="inquiry-page-btn">
                    <button
                        onClick={() => {
                            leftBtnHandler();
                        }}
                        className="inquiry-page-prevbtn"
                    >
                        &lt;
                    </button>
                    {btnJSX ? btnJSX : null}
                    <button
                        onClick={() => {
                            rightBtnHandler();
                        }}
                        className="inquiry-page-prevbtn"
                    >
                        &gt;
                    </button>
                    <Link to={"/inquiry/post"}>
                        <button className="inquiry-register-btn">1:1 문의 등록</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Inquiry;
