import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "./css/faqPost.css";
import "react-quill/dist/quill.snow.css";
import { faqApi } from "../_api";

const Notice = ({ history }) => {
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
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const onEditorChange = (value) => {
        setContent(value);
    };
    const onChangeTitle = (e) => {
        const { target } = e;
        setTitle(target.value);
    };

    const submitHandler = async () => {
        let response;
        if (title !== "" && content !== "") {
            try {
                response = await faqApi.postFAQ(title, content);
                if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                history.push("/faq");
            }
        } else {
            alert("모든 항목을 입력해야 합니다.");
        }
    };

    return (
        <div className="faqPost-wrap">
            <div className="faqPost-board">
                <div className="faqPost-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 자주 묻는 질문 &nbsp; &gt;&nbsp; 자주 묻는 질문 추가</div>
                <p className="faqPost-text">자주 묻는 질문 추가</p>
                <div className="faqPost-line"></div>
                <form className="faqPost-form">
                    <label className="faqPost-label" htmlFor="title">
                        제목<span className="faqPost-star"> *</span>
                    </label>
                    <input className="faqPost-input" placeHolder="제목을 입력하세요. (20자 이내)" onChange={onChangeTitle} value={title} type="text" id="title"></input>
                    <div className="faqPost-label">
                        상세 내용<span className="faqPost-star"> *</span>
                    </div>
                    <ReactQuill id="content" className="faqPost-editor" theme="snow" modules={modules} formats={formats} value={content} onChange={(content, delta, source, editor) => onEditorChange(editor.getHTML())} />
                </form>
                <div className="faqPost-btn-section">
                    <button className="faqPost-btn" onClick={submitHandler}>
                        추가하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Notice);
