import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { noticeApi } from "../_api";
import "./css/noticeDetail.css";

const Notice = () => {
    const [data, setData] = useState();
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    useEffect(() => {
        async function fetchData() {
            setNext(null);
            setPrev(null);
            const urlArr = window.location.href.split("/");
            const id = window.location.href.split("/")[urlArr.length - 1];
            let { data } = await noticeApi.getNoticeDetail(id);
            console.log(data);
            if (data.prev) setPrev(data.prev);
            if (data.next) setNext(data.next);
            console.log(next);

            setData(data);
        }
        fetchData();
    }, [window.location.href]);

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
                </div>
            ) : null}
        </div>
    );
};
export default Notice;
