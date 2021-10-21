import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { inquiryApi } from "../_api";
import "./css/inquiryDetail.css";

const Inquiry = ({ history }) => {
    const [data, setData] = useState();
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    const getId = () => {
        const urlArr = window.location.href.split("/");
        const id = window.location.href.split("/")[urlArr.length - 1];
        return id;
    };

    useEffect(() => {
        async function fetchData() {
            setNext(null);
            setPrev(null);
            let id = getId();
            let { data } = await inquiryApi.inquiryDetail(id);
            console.log(data);
            if (data.prev) setPrev(data.prev);
            if (data.next) setNext(data.next);
            setData(data);
        }
        fetchData();
    }, [window.location.href]);
    const deleteHandler = async () => {
        let check = window.confirm("정말 삭제하시겠습니까?");
        let response;
        if (check === true) {
            try {
                response = await inquiryApi.deleteInquiry(getId());
                if (response.status !== 204) throw new Error("204 status를 반환하지 않음");
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                history.push("/inquiry");
            }
        }
    };

    return (
        <div className="inquiryDetail-wrap">
            {data ? (
                <div className="inquiryDetail-board">
                    <div className="inquiryDetail-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 1:1 문의</div>
                    <Link to="/inquiry" className="inquiryDetail-text">
                        1:1 문의
                    </Link>
                    <div className="inquiryDetail-category-line"></div>
                    <div className="inquiryDetail-tab-category">
                        <span>NO</span>
                        <span>{data.title}</span>
                        <span>{data.createdDate.substr(0, 9)}</span>
                    </div>
                    <div className="inquiryDetail-category-line"></div>
                    <div className="inquiryDetail-main" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    <div className="inquiryDetail-category-line"></div>
                    {next ? (
                        <Link to={`/notice/${next.id}`} className="inquiryDetail-tab-category">
                            <span>이전</span>
                            <span>{next.title}</span>
                            <span>{next.createdDate.substr(0, 9)}</span>
                        </Link>
                    ) : (
                        <div className="inquiryDetail-tab-category">
                            <span>처음</span>
                            <span>처음 게시물입니다.</span>
                        </div>
                    )}
                    <div className="inquiryDetail-category-line"></div>
                    {prev ? (
                        <Link to={`/inquiry/${prev.id}`} className="inquiryDetail-tab-category">
                            <span>다음</span>
                            <span>{prev.title}</span>
                            <span>{prev.createdDate.substr(0, 9)}</span>
                        </Link>
                    ) : (
                        <div className="inquiryDetail-tab-category">
                            <span>마지막</span>
                            <span>마지막 게시물입니다.</span>
                        </div>
                    )}
                    <div className="inquiryDetail-category-line"></div>
                    <div className="inquiryDetail-button-Area">
                        <button
                            onClick={() => {
                                deleteHandler();
                            }}
                            className="inquiryDetail-register-btn"
                        >
                            1:1 문의 삭제
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default withRouter(Inquiry);
