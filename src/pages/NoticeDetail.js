import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { noticeApi } from "../_api";
import "./css/noticeDetail.css";

const Notice = ({ history }) => {
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
            let { data } = await noticeApi.getNoticeDetail(id);
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
                response = await noticeApi.deleteNotice(getId());
                if (response.status !== 204) throw new Error("204 status를 반환하지 않음");
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                history.push("/notice");
            }
        }
    };

    return (
        <div className="noticeDetail-wrap">
            {data ? (
                <div className="noticeDetail-board">
                    <div className="noticeDetail-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 공지사항</div>
                    <Link to="/notice" className="noticeDetail-text">
                        공지사항
                    </Link>
                    <div className="noticeDetail-category-line"></div>
                    <div className="noticeDetail-tab-category">
                        <span>NO</span>
                        <span>{data.title}</span>
                        <span>{data.createdDate.substr(0, 9)}</span>
                    </div>
                    <div className="noticeDetail-category-line"></div>
                    <div className="noticeDetail-main" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    <div className="noticeDetail-category-line"></div>
                    {next ? (
                        <Link to={`/notice/${next.id}`} className="noticeDetail-tab-category">
                            <span>이전</span>
                            <span>{next.title}</span>
                            <span>{next.createdDate.substr(0, 9)}</span>
                        </Link>
                    ) : (
                        <div className="noticeDetail-tab-category">
                            <span>처음</span>
                            <span>처음 게시물입니다.</span>
                        </div>
                    )}
                    <div className="noticeDetail-category-line"></div>
                    {prev ? (
                        <Link to={`/notice/${prev.id}`} className="noticeDetail-tab-category">
                            <span>다음</span>
                            <span>{prev.title}</span>
                            <span>{prev.createdDate.substr(0, 9)}</span>
                        </Link>
                    ) : (
                        <div className="noticeDetail-tab-category">
                            <span>마지막</span>
                            <span>마지막 게시물입니다.</span>
                        </div>
                    )}
                    <div className="noticeDetail-category-line"></div>
                    <div to={"/notice/post"}>
                        <div className="noticeDetail-button-Area">
                            <Link to={`/notice/${getId()}/edit`}>
                                <button className="noticeDetail-register-btn">공지사항 수정</button>
                            </Link>
                            <button
                                onClick={() => {
                                    deleteHandler();
                                }}
                                className="noticeDetail-register-btn"
                            >
                                공지사항 삭제
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default withRouter(Notice);
