import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./css/companyPost.css";
import { companyApi } from "../_api";
import Test from "../components/address/Test";

const Notice = ({ history }) => {
    const [name, setName] = useState("");
    const [form, setForm] = useState("");
    const [industry, setIndustry] = useState("");
    const [sales, setSales] = useState("");
    const [homepage, setHomepage] = useState("");
    const [memberCount, setMemberCount] = useState("");
    const [address, setAddress] = useState("");
    const [ceo, setCeo] = useState("");
    const [foundingDate, setFoundingDate] = useState("");

    const onChangeHandler = (e, setData) => {
        const { target } = e;
        setData(target.value);
    };
    const onChangeName = (e) => {
        onChangeHandler(e, setName);
    };
    const onChangeForm = (e) => {
        onChangeHandler(e, setForm);
    };
    const onChangeField = (e) => {
        onChangeHandler(e, setIndustry);
    };
    const onChangeSales = (e) => {
        onChangeHandler(e, setSales);
    };
    const onChangePageAddress = (e) => {
        onChangeHandler(e, setHomepage);
    };
    const onChangememberCount = (e) => {
        onChangeHandler(e, setMemberCount);
    };
    const onChangeAddress = (address) => {
        setAddress(address);
    };
    const onChangeCeo = (e) => {
        onChangeHandler(e, setCeo);
    };
    const onChangeFoundingDate = (e) => {
        onChangeHandler(e, setFoundingDate);
    };

    const submitHandler = async () => {
        let response;
        if (name !== "" && form !== "" && industry !== "" && sales !== "" && homepage !== "" && memberCount !== "" && address !== "" && ceo !== "" && foundingDate !== "") {
            try {
                response = await companyApi.postCompany(name, form, industry, sales, homepage, memberCount, address, ceo, foundingDate);
                // if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
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
        <div className="companyPost-wrap">
            <div className="companyPost-board">
                <div className="companyPost-route">홈 &nbsp;&gt;&nbsp; 추천기업 &nbsp; &gt;&nbsp;기업 등록</div>
                <p className="companyPost-text">기업 등록</p>
                <div className="companyPost-line"></div>
                <form className="companyPost-form">
                    <label className="companyPost-label" htmlFor="name">
                        기업명<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="기업명" value={name} onChange={(e) => onChangeName(e)} className="companyPost-input" type="text" id="name"></input>
                    <label className="companyPost-label" htmlFor="form">
                        기업 형태<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="기업 형태" value={form} onChange={(e) => onChangeForm(e)} className="companyPost-input" type="text" id="form"></input>
                    <label className="companyPost-label" htmlFor="industry">
                        분야<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="분야" value={industry} onChange={(e) => onChangeField(e)} className="companyPost-input" type="text" id="industry"></input>
                    <label className="companyPost-label" htmlFor="sales">
                        매출액<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="매출액" value={sales} onChange={(e) => onChangeSales(e)} className="companyPost-input" type="text" id="sales"></input>
                    <label className="companyPost-label" htmlFor="homepage">
                        홈페이지 주소<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="홈페이지 주소" value={homepage} onChange={(e) => onChangePageAddress(e)} className="companyPost-input" type="text" id="homepage"></input>
                    <label className="companyPost-label" htmlFor="memberCount">
                        사원수<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="사원수" value={memberCount} onChange={(e) => onChangememberCount(e)} className="companyPost-input" type="text" id="memberCount"></input>
                    <label className="companyPost-label" htmlFor="address">
                        주소<span className="companyPost-star"> *</span>
                    </label>
                    <div>
                        <input required placeholder="주소" value={address} className="companyPost-input" type="text" id="address"></input>
                        <Test onChangeAddress={onChangeAddress} />
                    </div>
                    <label className="companyPost-label" htmlFor="ceo">
                        대표<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="이름" value={ceo} onChange={(e) => onChangeCeo(e)} className="companyPost-input" type="text" id="ceo"></input>
                    <label className="companyPost-label" htmlFor="foundingDate">
                        설립일<span className="companyPost-star"> *</span>
                    </label>
                    <input required placeholder="설립일" value={foundingDate} onChange={(e) => onChangeFoundingDate(e)} className="companyPost-input" type="date" id="foundingDate"></input>
                </form>
                <div className="companyPost-btn-section">
                    <button className="companyPost-btn" onClick={submitHandler}>
                        문의하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Notice);
