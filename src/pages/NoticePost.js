import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "./css/noticePost.css";
import "react-quill/dist/quill.snow.css";

const Notice = () => {
    const modules = {
        toolbar: [
            //[{ 'font': [] }],
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
            ["link", "image"],
            [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
            ["clean"],
        ],
    };
    const formats = [
        //'font',
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "align",
        "color",
        "background",
    ];
    const [desc, setDesc] = useState("");
    const onEditorChange = (value) => {
        setDesc(value);
        console.log(value);
    };

    return (
        <div className="noticePost-wrap">
            <div className="noticePost-board">
                <div className="noticePost-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 공지사항 &nbsp; &gt;&nbsp; 공지사항 추가</div>
                <p className="noticePost-text">공지사항 추가</p>
                <div className="noticePost-line"></div>
                <form className="noticePost-form">
                    <label className="noticePost-label" htmlFor="title">
                        제목 입력
                    </label>
                    <input className="noticePost-input" type="text" id="title"></input>
                    <label className="noticePost-label">내용</label>
                    <ReactQuill id="main" className="noticePost-editor" theme="snow" modules={modules} formats={formats} value={desc || ""} onChange={(content, delta, source, editor) => onEditorChange(editor.getHTML())} />
                </form>
                <div className="noticePost-btn-section">
                    <button className="noticePost-register-btn">확인</button>
                </div>
            </div>
        </div>
    );
};
export default Notice;
