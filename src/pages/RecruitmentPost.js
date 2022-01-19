import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./css/recruitmentPost.css";
import { recruitmentApi, companyApi } from "../_api";
import Test from "../components/address/Test";

const Notice = ({ history }) => {
    const [title, setTitle] = useState("");
    const [career, setCareer] = useState("");
    const [education, setEducation] = useState("");
    const [workType, setWorkType] = useState("1");
    const [pay, setPay] = useState("");
    const [url, setUrl] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("");
    const [logo, setLogo] = useState("");
    const [companyList, setCompanyList] = useState([]);
    const [companyId, setCompanyId] = useState(0);
    const jobData = [
        "기획전략",
        "마케팅·홍보·조사",
        "회계·사무·재무",
        "인사·노무·HRD",
        "총무·법무·사무",
        "IT개발·데이터",
        "디자인",
        "영업·판매·무역",
        "고객상담·TM",
        "구매·자재·물류",
        "상품기획·MD",
        "운전·운송·배송",
        "서비스",
        "생산",
        "건설·건축",
        "의료",
        "연구·R&D",
        "교육",
        "미디어·문화·스포츠",
        "금융·보험",
        "공공·복지",
    ];

    useEffect(() => {
        const fetchData = async () => {
            const {
                data: { companies },
            } = await companyApi.getCompanyList();
            setCompanyList(companies);
        };
        fetchData();
    }, []);

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
    const onChangeUrl = (e) => {
        onChangeHandler(e, setUrl);
    };
    const onChangeCompany = (e) => {
        onChangeHandler(e, setCompanyId);
    };

    const submitHandler = async () => {
        let response;
        console.log(companyId, title, career, education, workType, pay, address, category, logo, url);
        if ((companyId !== 0) & (title !== "") && career !== "" && education !== "" && pay !== "" && address !== "" && category !== "" && logo !== "" && url !== "") {
            try {
                response = await recruitmentApi.postRecruitment(companyId, title, career, education, workType, pay, address, category, logo, url);
                if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
                console.log(response);
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
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
                    <label className="recruitmentPost-label" htmlFor="company">
                        회사 선택<span className="recruitmentPost-star"> *</span>
                    </label>
                    <select required placeholder="회사 선택" value={companyId} onChange={(e) => onChangeCompany(e)} className="recruitmentPost-input" id="category">
                        {companyList ? companyList.map((item) => <option value={item.id}>{item.name}</option>) : null}
                    </select>
                    <label className="recruitmentPost-label" htmlFor="form">
                        경력<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="경력" value={career} onChange={(e) => onChangeCareer(e)} className="recruitmentPost-input" type="text" id="career"></input>
                    <label className="recruitmentPost-label" htmlFor="education">
                        학력<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="학력" value={education} onChange={(e) => onChangeEducation(e)} className="recruitmentPost-input" type="text" id="education"></input>

                    <label className="recruitmentPost-label" htmlFor="pay">
                        급여<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="급여" value={pay} onChange={(e) => onChangePay(e)} className="recruitmentPost-input" type="text" id="pay"></input>

                    <label className="recruitmentPost-label" htmlFor="category">
                        카테고리<span className="recruitmentPost-star"> *</span>
                    </label>
                    <select required placeholder="카테고리" value={category} onChange={(e) => onChangeCategory(e)} className="recruitmentPost-input" type="text" id="category">
                        {jobData.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </select>
                    <label className="recruitmentPost-label" htmlFor="url">
                        공고 이미지 주소<span className="recruitmentPost-star"> *</span>
                    </label>
                    <input required placeholder="공고 이미지 주소" value={url} onChange={(e) => onChangeUrl(e)} className="recruitmentPost-input" type="text" id="url"></input>

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
