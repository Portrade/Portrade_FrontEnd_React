import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./css/recruitmentPost.css";
import { recruitmentApi } from "../_api";
import Test from "../components/address/Test";

const Notice = ({ history }) => {
    const [title, setTitle] = useState("");
    const [career, setCareer] = useState("");
    const [education, setEducation] = useState("");
    const [workType, setWorkType] = useState("");
    const [pay, setPay] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("");
    const [logo, setLogo] = useState("");

    const onChangeHandler = (e, setData) => {
        const { target } = e;
        setData(target.value);
    };
    const onChangeTitle = (e) => {
        onChangeHandler(e, setTitle);
    };
    const onChangeCareer = (e) => {
        onChangeHandler(e, setCareer);
    };
    const onChangeEducation = (e) => {
        onChangeHandler(e, setEducation);
    };
    const onChangeWorkType = (e) => {
        onChangeHandler(e, setWorkType);
    };
    const onChangePay = (e) => {
        onChangeHandler(e, setPay);
    };
    const onChangeCategory = (e) => {
        onChangeHandler(e, setCategory);
    };
    const onChangeAddress = (address) => {
        setAddress(address);
    };
    const onChangeLogo = (e) => {
        onChangeHandler(e, setLogo);
    };

    const submitHandler = async () => {
        let response;
        if (title !== "" && career !== "" && education !== "" && workType !== "" && pay !== "" && address !== "" && category !== "" && logo !== "") {
            try {
                response = await recruitmentApi.postRecruitment(2, title, career, education, workType, pay, address, category, logo);
                if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
                console.log(response);
            } catch {
                // alert("정상적으로 처리되지 않았습니다.");
            } finally {
                // history.push("/suggestion");
            }
        } else {
            alert("모든 항목을 입력해야 합니다.");
        }
    };
    return (
        <div className="recruitmentPost-wrap">
            <div className="recruitmentPost-board">
                <div className="recruitmentPost-route">홈 &nbsp;&gt;&nbsp; 추천기업 &nbsp; &gt;&nbsp;공고 등록</div>
                <p className="recruitmentPost-text">공고 등록</p>
                <div className="recruitmentPost-line"></div>
                <form className="recruitmentPost-form">
                    <label className="recruitmentPost-label" htmlFor="title">
                        제목<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="제목" value={title} onChange={(e) => onChangeTitle(e)} className="recruitmentPost-input" type="text" id="title"></input>
                    <label className="recruitmentPost-label" htmlFor="form">
                        경력<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="경력" value={career} onChange={(e) => onChangeCareer(e)} className="recruitmentPost-input" type="text" id="career"></input>
                    <label className="recruitmentPost-label" htmlFor="education">
                        학력<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="학력" value={education} onChange={(e) => onChangeEducation(e)} className="recruitmentPost-input" type="text" id="education"></input>
                    <label className="recruitmentPost-label" htmlFor="workType">
                        분야<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="분야" value={workType} onChange={(e) => onChangeWorkType(e)} className="recruitmentPost-input" type="text" id="workType"></input>
                    <label className="recruitmentPost-label" htmlFor="pay">
                        급여<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="급여" value={pay} onChange={(e) => onChangePay(e)} className="recruitmentPost-input" type="text" id="pay"></input>

                    <label className="recruitmentPost-label" htmlFor="category">
                        카테고리<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="카테고리" value={category} onChange={(e) => onChangeCategory(e)} className="recruitmentPost-input" type="text" id="category"></input>
                    <label className="recruitmentPost-label" htmlFor="logo">
                        로고 주소<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="로고 주소" value={logo} onChange={(e) => onChangeLogo(e)} className="recruitmentPost-input" type="text" id="logo"></input>
                    <label className="recruitmentPost-label" htmlFor="address">
                        주소<span className="recruitmentPost-star"> *</span>
                    </label>
                    <div>
                        <input required placeholder="주소" value={address} className="recruitmentPost-input" type="text" id="address"></input>
                        <Test onChangeAddress={onChangeAddress} />
                    </div>
                </form>
                <div className="recruitmentPost-btn-section">
                    <button className="recruitmentPost-btn" onClick={submitHandler}>
                        등록
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Notice);
