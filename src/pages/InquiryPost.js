import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "./css/inquiryPost.css";
import "react-quill/dist/quill.snow.css";
import { inquiryApi } from "../_api";

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
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [phoneNumber, setPhoneNum] = useState("");
    const [mailHeader, setMailHeader] = useState("");
    const [domain, setDomain] = useState("");

    const onChangeHandler = (e, setData) => {
        const { target } = e;
        setData(target.value);
    };
    const onChangeName = (e) => {
        onChangeHandler(e, setName);
    };
    const onChangeTitle = (e) => {
        onChangeHandler(e, setTitle);
    };
    const onChangePhoneNum = (e) => {
        onChangeHandler(e, setPhoneNum);
    };
    const onChangeMailHeader = (e) => {
        onChangeHandler(e, setMailHeader);
    };
    const onChangeDomain = (e) => {
        onChangeHandler(e, setDomain);
    };
    const onEditorChange = (value) => {
        setContent(value);
    };
    const isPublic = true;
    const category = "";

    const submitHandler = async () => {
        let response;
        if (content !== "" && title !== "" && name !== "" && phoneNumber !== "" && mailHeader !== "" && domain !== "") {
            try {
                const email = mailHeader + "@" + domain;
                response = await inquiryApi.postInquiry(category, name, phoneNumber, email, title, content, isPublic);
                if (response.status !== 201) throw new Error("201 status??? ???????????? ??????");
            } catch {
                alert("??????????????? ???????????? ???????????????.");
            } finally {
                history.push("/inquiry");
            }
        } else {
            alert("?????? ????????? ???????????? ?????????.");
        }
    };

    return (
        <div className="inquiryPost-wrap">
            <div className="inquiryPost-board">
                <div className="inquiryPost-route">??? &nbsp;&gt;&nbsp; ???????????? &nbsp; &gt;&nbsp; 1:1 ?????? &nbsp; &gt;&nbsp; 1:1 ?????? ??????</div>
                <p className="inquiryPost-text">1:1 ?????? ??????</p>
                <div className="inquiryPost-line"></div>
                <form className="inquiryPost-form">
                    <label className="inquiryPost-label" htmlFor="name">
                        ??????<span className="inquiryPost-star"> *</span>
                    </label>
                    <input required placeholder="??????" value={name} onChange={(e) => onChangeName(e)} className=" inquiryPost-name-main inquiryPost-input" type="text" id="name"></input>
                    <label className="inquiryPost-label" htmlFor="phoneNumber">
                        ????????? ??????<span className="inquiryPost-star"> *</span>
                    </label>
                    <div className="inquiryPost-phone-section">
                        <div className="inquiryPost-phone-header">010</div>
                        <input value={phoneNumber} onChange={(e) => onChangePhoneNum(e)} placeholder="'-' ?????? ???????????????." className="inquiryPost-input inquiryPost-phone-main" type="text" id="phoneNumber"></input>
                    </div>
                    <label className="inquiryPost-label" htmlFor="email">
                        ????????? ??????<span className="inquiryPost-star"> *</span>
                    </label>
                    <div className="inquiryPost-email-section">
                        <input value={mailHeader} onChange={(e) => onChangeMailHeader(e)} className="inquiryPost-input inquiryPost-email-main" type="text" id="email"></input>
                        <span>@</span>
                        <input value={domain} onChange={(e) => onChangeDomain(e)} className="inquiryPost-input inquiryPost-email-domain" type="text"></input>
                        <select onChange={(e) => onChangeDomain(e)} className="inquiryPost-input inquiryPost-email-select">
                            <option value="" selected>
                                ????????????
                            </option>
                            <option value="naver.com">naver.com</option>
                            <option value="hanmail.net">hanmail.net</option>
                            <option value="nate.com">nate.com</option>
                            <option value="gmail.com">gmail.com</option>
                        </select>
                    </div>
                    <label className="inquiryPost-label" htmlFor="title">
                        ??????<span className="inquiryPost-star"> *</span>
                    </label>
                    <input className="inquiryPost-input" placeHolder="????????? ???????????????. (20??? ??????)" onChange={onChangeTitle} value={title} type="text" id="title"></input>
                    <div className="inquiryPost-label">
                        ?????? ??????<span className="inquiryPost-star"> *</span>
                    </div>
                    <ReactQuill id="content" className="inquiryPost-editor" theme="snow" modules={modules} formats={formats} value={content} onChange={(content, delta, source, editor) => onEditorChange(editor.getHTML())} />
                </form>
                <div className="inquiryPost-btn-section">
                    <button className="inquiryPost-btn" onClick={submitHandler}>
                        ????????????
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Notice);
