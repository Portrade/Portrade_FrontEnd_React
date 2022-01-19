import React, { useState, useEffect } from "react";
import "./css/suggestionModal.css";
import { recruitmentApi } from "../../_api";

const SuggestionModal = ({ modalOpen, modalHandler, modalIndex, setModalDeleteCheck }) => {
    const [companyData, setCompanyData] = useState({});
    const [recruitmentData, setRecruitmentData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const {
                data: { company, recruitment },
            } = await recruitmentApi.getRecruitmentDetail(modalIndex);
            setCompanyData(company);
            setRecruitmentData(recruitment);
            console.log(recruitmentData);
        }

        fetchData();
    }, [modalIndex]);

    const deleteHandler = (id) => {
        async function deleteRecruitment() {
            try {
                await recruitmentApi.deleteRecruitment(id);
            } catch {
                alert("정상적으로 처리되지 않았습니다.");
            } finally {
                modalHandler();
                setModalDeleteCheck(!modalOpen);
                alert("삭제 되었습니다.");
            }
        }
        deleteRecruitment();
    };
    return modalOpen ? (
        <div className="suggestion-modal-container">
            <button className="suggestion-modal-closeBtn" onClick={modalHandler}>
                &times;
            </button>
            <div className="suggestion-modal-wrapper">
                <div className="suggestion-modal-header">
                    <div className="suggestion-modal-header-left">
                        <h4 className="suggestion-modal-title">{recruitmentData.title}</h4>
                        <h4 className="suggestion-modal-title">{recruitmentData.company}</h4>
                        <span className="suggestion-modal-title">업로드 날짜 ({recruitmentData.createdDate ? recruitmentData.createdDate.substr(0, 10) : null})</span>
                    </div>

                    <div className="suggestion-modal-view">
                        <span>{recruitmentData.viewCount}</span>
                        <span>조회수</span>
                    </div>
                    <a className="suggestion-modal-homepage" href={companyData.homepage} target="_blank" rel="noreferrer">
                        홈페이지 지원
                    </a>
                </div>
                <div className="suggestion-modal-info">
                    <span>경력</span>
                    <span>{recruitmentData.career}</span>
                    <span>급여</span>
                    <span>{recruitmentData.pay}</span>
                    <span>학력</span>
                    <span>{recruitmentData.education}</span>
                    <span>근무</span>
                    <span>{recruitmentData.address}</span>
                    <span>직종</span>
                    <span>{recruitmentData.category}</span>
                </div>
                <img className="suggestion-modal-img" src={recruitmentData.url}></img>
                <div className="suggestion-modal-buttonArea">
                    <button className="suggestion-modal-button">
                        <a href={companyData.homepage} target="_blank" rel="noreferrer">
                            홈페이지로 이동
                        </a>
                    </button>
                    <button className="suggestion-modal-button">저장하기</button>
                </div>
                <h3 className="suggestion-modal-companyInfo">기업 정보</h3>
                <div className="suggestion-modal-companyInfo-section">
                    <img src={recruitmentData.logo} alt="logo" className="suggestion-modal-logo"></img>
                    <div className="suggestion-modal-companyInfo-right-box">
                        <h2>{companyData.name}</h2>
                        <div className="suggestion-modal-info-grid">
                            <div>기업 형태</div>
                            <div>{companyData.form}</div>
                            <div>사원수*</div>
                            <div>{companyData.memberCount}</div>
                            <div>업종</div>
                            <div>{companyData.indeustry}</div>
                            <div>설립일*</div>
                            <div>{companyData.foundingDate}</div>
                            <div>매출액*</div>
                            <div>{companyData.sales}</div>
                            <div>대표자명*</div>
                            <div>{companyData.ceo}</div>
                            <div>홈페이지</div>
                            <div>{companyData.homepage}</div>
                            <div>기업주소</div>
                            <div>{companyData.address}</div>
                        </div>
                        <div className="suggestion-modal-extra">*항목은 본사 정보와 다를 수 있습니다</div>
                    </div>
                </div>
                <button className="suggestion-modal-deleteBtn" onClick={() => deleteHandler(modalIndex)}>
                    공고 삭제
                </button>
            </div>
        </div>
    ) : null;
};
export default SuggestionModal;
