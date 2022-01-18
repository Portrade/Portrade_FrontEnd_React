import React, { useState, useEffect } from "react";
import "./css/suggestion.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { recruitmentApi } from "../_api";
import SuggestionModal from "../components/suggestion/SuggestionModal";

const Suggestion = () => {
    const autoCarouselSetting = {
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
    };
    const arrowCarouselSetting = {
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        slidesToScroll: 1,
    };

    const siDoData = ["시/도 선택", "서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
    const areaData = {
        서울특별시: [
            "강남구",
            "강동구",
            "강북구",
            "강서구",
            "관악구",
            "광진구",
            "구로구",
            "금천구",
            "노원구",
            "도봉구",
            "동대문구",
            "동작구",
            "마포구",
            "서대문구",
            "서초구",
            "성동구",
            "성북구",
            "송파구",
            "양천구",
            "영등포구",
            "용산구",
            "은평구",
            "종로구",
            "중구",
            "중랑구",
        ],
        인천광역시: ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"],
        대전광역시: ["대덕구", "동구", "서구", "유성구", "중구"],
        광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
        대구광역시: ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"],
        울산광역시: ["남구", "동구", "북구", "중구", "울주군"],
        부산광역시: ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"],
        경기도: [
            "고양시",
            "과천시",
            "광명시",
            "광주시",
            "구리시",
            "군포시",
            "김포시",
            "남양주시",
            "동두천시",
            "부천시",
            "성남시",
            "수원시",
            "시흥시",
            "안산시",
            "안성시",
            "안양시",
            "양주시",
            "오산시",
            "용인시",
            "의왕시",
            "의정부시",
            "이천시",
            "파주시",
            "평택시",
            "포천시",
            "하남시",
            "화성시",
            "가평군",
            "양평군",
            "여주군",
            "연천군",
        ],
        강원도: ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"],
        충청북도: ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"],
        충청남도: ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"],
        전라북도: ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"],
        전라남도: ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"],
        경상북도: [
            "경산시",
            "경주시",
            "구미시",
            "김천시",
            "문경시",
            "상주시",
            "안동시",
            "영주시",
            "영천시",
            "포항시",
            "고령군",
            "군위군",
            "봉화군",
            "성주군",
            "영덕군",
            "영양군",
            "예천군",
            "울릉군",
            "울진군",
            "의성군",
            "청도군",
            "청송군",
            "칠곡군",
        ],
        경상남도: ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"],
        제주도: ["서귀포시", "제주시", "남제주군", "북제주군"],
    };
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
    const [inputVal, setInpuVal] = useState("");
    const [areaSelectOpen, setAreaSelectOpen] = useState(false);
    const [jobSelectOpen, setJobSelectOpen] = useState(false);
    const [sido, setSiDo] = useState("시/도 선택");
    const [job, setJob] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [autoCarouselData, setAutoCaruoselData] = useState([]);
    const [modalDeleteCheck, setModalDeleteCheck] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const {
                data: {
                    recruitments,
                    page: { totalElement },
                },
            } = await recruitmentApi.getRecruitment();
            setAutoCaruoselData(new Array(totalElement).fill(0));
            setAutoCaruoselData(recruitments);
        }
        fetchData();
    }, [modalDeleteCheck]);

    const searchInputHandler = ({ target: { value } }) => {
        setInpuVal(value);
    };

    const selectOpener = (e, state, stateUpdateFunc) => {
        e.preventDefault(areaSelectOpen);
        setAreaSelectOpen(false);
        setJobSelectOpen(false);
        stateUpdateFunc(!state);
    };

    const liButtonFocus = (e, stateUpdateFunc) => {
        const arrow = document.createElement("span");
        arrow.innerText = "⇨";
        let item = e.target;
        stateUpdateFunc(e.target.innerText);
        item.appendChild(arrow);
    };
    const liButtonFocusOut = (e) => {
        const target = e.target;
        target.removeChild(target.querySelector("span"));
    };

    const openModalHandler = (e, index) => {
        setOpenModal(!openModal);
        setModalIndex(index);
    };

    const setModalDeleteHandler = () => {
        setModalDeleteCheck(!modalDeleteCheck);
    };

    const autoCaruosel = autoCarouselData.map((item, index) => (
        <>
            <div className="suggestion-auto-carousel-box" key={index} onClick={(e) => openModalHandler(e, item.id)}>
                <img className="suggestion-auto-carousel-logo" src={item.logo} alt="logo"></img>
                <div className="suggestion-auto-carousel-title">{item.title}</div>
                <div className="suggestion-auto-carousel-company">{item.company}</div>
                <div className="suggestion-auto-carousel-detail">
                    <span>{item.career}</span>
                    <span>{item.education}</span>
                    <span>{item.location}</span>
                </div>
            </div>
        </>
    ));

    const arrowCaruosel = autoCarouselData.map((item, index) => (
        <div className="suggestion-arrow-carousel-box" key={index}>
            <img className="suggestion-arrow-carousel-logo" src={item.logo}></img>
            <div className="suggestion-arrow-carousel-title">{item.title}</div>
            <div className="suggestion-arrow-carousel-company">{item.company}</div>
            <div className="suggestion-arrow-carousel-detail">
                <span>{item.career}</span>
                <span>{item.education}</span>
                <span>{item.location}</span>
            </div>
            {/* <div className="suggestion-arrow-carousel-date">{`${item.date.substr(0, 13)}시`}</div> */}
        </div>
    ));

    return (
        <div className={`suggestion-box  ${openModal ? "suggestion-bg" : null}`}>
            <div className="suggestion-header">
                <p>추천 기업입니다.</p>
                <p>취업의 기회를 여러분에게 전달해 드립니다.</p>
                <p>포트레이트에서 간편하게 기업 공고를 열람해 보세요.</p>
            </div>
            <div className="suggestion-auto-carousel-container">
                <Slider {...autoCarouselSetting}>{autoCaruosel}</Slider>
                <SuggestionModal modalOpen={openModal} modalIndex={modalIndex} modalHandler={openModalHandler} setModalDeleteCheck={setModalDeleteHandler} />
            </div>
            <div className="suggestion-arrow-carousel-container">
                <h2 className="suggestion-subTitle">추천 기업 공고</h2>
                <Slider {...arrowCarouselSetting}>{arrowCaruosel}</Slider>
            </div>
            <div className="suggestion-sort-container">
                <h2 className="suggestion-subTitle">정렬 기준</h2>
                <div className="suggestion-input-container">
                    <i className="suggestion-search-icon" alt="search_icon" />
                    <input className="suggestion-input" onChange={(e) => searchInputHandler(e)} value={inputVal} placeholder="기업 공고 검색"></input>
                    <button className={"suggestion-sort-button suggestion-sort-area-button " + (areaSelectOpen ? "suggestion-button-focus" : null)} onClick={(e) => selectOpener(e, areaSelectOpen, setAreaSelectOpen)}>
                        지역▽<div>{sido !== "시/도 선택" ? "✔️" : null}</div>
                    </button>

                    {areaSelectOpen ? (
                        <div className="suggestion-area-container">
                            <ul className="suggestion-area-ul">
                                {siDoData.map((city, index) => {
                                    return (
                                        <li className="suggestion-area-li" key={index}>
                                            <button className="suggestion-area-button" onFocus={(e) => liButtonFocus(e, setSiDo)} onBlur={(e) => liButtonFocusOut(e)}>
                                                {city}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : null}
                    {(sido !== "시/도 선택") & areaSelectOpen ? (
                        <ul className="suggestion-area-city-ul">
                            {areaData[sido].map((city, index) => {
                                return (
                                    <li className="suggestion-area-li" key={index}>
                                        <button className="suggestion-area-button">{city}</button>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : null}
                    <button className={"suggestion-sort-button suggestion-sort-job-button " + (jobSelectOpen ? "suggestion-button-focus" : null)} onClick={(e) => selectOpener(e, jobSelectOpen, setJobSelectOpen)}>
                        직종▽<div>{job !== "" ? "✔️" : null}</div>
                    </button>
                    {jobSelectOpen ? (
                        <div className="suggestion-job-container">
                            <ul className="suggestion-job-ul">
                                {jobData.map((city, index) => {
                                    return (
                                        <li className="suggestion-area-li" key={index}>
                                            <button className="suggestion-area-button" onFocus={(e) => liButtonFocus(e, setJob)} onBlur={(e) => liButtonFocusOut(e)}>
                                                {city}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
            <button className="suggestion-btn">
                <Link to="company">기업 등록</Link>
            </button>
            <button className="suggestion-btn">
                <Link to="recruitment">공고 등록</Link>
            </button>
        </div>
    );
};

export default Suggestion;
