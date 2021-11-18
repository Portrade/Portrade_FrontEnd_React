import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "./css/inquiryPost.css";
import "react-quill/dist/quill.snow.css";
import { inquiryApi } from "../_api";

const InquiryAnswer = ({ history, match }) => {
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

    const onChangeHandler = (e, setData) => {
        const { target } = e;
        setData(target.value);
    };

    const onChangeTitle = (e) => {
        onChangeHandler(e, setTitle);
    };

    const onEditorChange = (value) => {
        setContent(value);
    };
    const isPublic = true;

    const submitHandler = async () => {
        let response;
        if (content !== "" && title !== "") {
            try {
                const {
                    params: { id },
                } = match;
                console.log(id);
                response = await inquiryApi.inquiryAnswer(id, title, content, isPublic);
                if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                // history.push("/inquiry");
            }
        } else {
            alert("모든 항목을 입력해야 합니다.");
        }
    };

    return (
        <div className="inquiryPost-wrap">
            <div className="inquiryPost-board">
                <div className="inquiryPost-route">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 1:1 문의 &nbsp; &gt;&nbsp; 1:1 문의 답변</div>
                <p className="inquiryPost-text">1:1 문의 답변</p>
                <div className="inquiryPost-line"></div>
                <form className="inquiryPost-form">
                    <label className="inquiryPost-label" htmlFor="title">
                        제목<span className="inquiryPost-star"> *</span>
                    </label>
                    <input className="inquiryPost-input" placeholder="제목을 입력하세요. (20자 이내)" onChange={onChangeTitle} value={title} type="text" id="title"></input>
                    <div className="inquiryPost-label">
                        상세 내용<span className="inquiryPost-star"> *</span>
                    </div>
                    <ReactQuill id="content" className="inquiryPost-editor" theme="snow" modules={modules} formats={formats} value={content} onChange={(content, delta, source, editor) => onEditorChange(editor.getHTML())} />
                </form>
                <div className="inquiryPost-btn-section">
                    <button className="inquiryPost-btn" onClick={submitHandler}>
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(InquiryAnswer);
