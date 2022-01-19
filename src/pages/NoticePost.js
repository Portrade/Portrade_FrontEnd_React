import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "./css/noticePost.css";
import "react-quill/dist/quill.snow.css";
import { companyApi, noticeApi } from "../_api";

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

    useEffect(() => {
        const fetchData = async () => {
            const companyList = await companyApi.getCompanyList();
            console.log(companyList);
        };
        fetchData();
    }, []);
    const [companyList, setCompanyList] = useState([]);

    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const onChangeTitle = (e) => {
        const { target } = e;
        setTitle(target.value);
    };
    const onEditorChange = (value) => {
        setDesc(value);
    };

    const submitHandler = async () => {
        let response;
        if (desc !== "" && title !== "") {
            try {
                response = await noticeApi.postList(title, desc);
                if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                history.push("/notice");
            }
        } else {
            alert("제목과 내용 모두 입력해야 합니다.");
        }
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
                    <input className="noticePost-input" onChange={onChangeTitle} value={title} type="text" id="title"></input>
                    <div className="noticePost-label">내용</div>
                    <ReactQuill id="content" className="noticePost-editor" theme="snow" modules={modules} formats={formats} value={desc || ""} onChange={(content, delta, source, editor) => onEditorChange(editor.getHTML())} />
                </form>
                <div className="noticePost-btn-section">
                    <button className="noticePost-btn" onClick={submitHandler}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Notice);
