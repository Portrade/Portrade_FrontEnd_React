import React, { useState } from "react";
import "./css/suggestion.css";

import Slider from "react-slick";

const Suggestion = () => {
    const autoCarouselSetting = {
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        slidesToScroll: 1,
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
    const [inputVal, setInpuVal] = useState("");
    const [areaSelectOpen, setAreaSelectOpen] = useState(false);
    const [jobSelectOpen, setJobSelectOpen] = useState(false);
    const [liAreaButton, setliAreaButton] = useState(false);
    const [sido, setSiDo] = useState("시/도 선택");

    const searchInputHandler = ({ target: { value } }) => {
        setInpuVal(value);
    };

    const selectOpener = (e, state, stateUpdateFunc) => {
        e.preventDefault();
        setAreaSelectOpen(false);
        setJobSelectOpen(false);
        stateUpdateFunc(!state);
    };

    const handleSelect = (e, stateUpdateFunc) => {
        stateUpdateFunc(e.target.value);
    };

    const liButtonFocus = (e) => {
        e.target.innerText += "⇨";
    };
    const liButtonFocusOut = (e) => {
        console.log(e.target.innerText);
        e.target.innerText = e.target.innerText.slice(0, -1);
    };

    const [autoCarouselData, setAutoCaruoselData] = useState([
        {
            logo: "Naver",
            title: "2021년 IT엔지니어/Technical Writer 체험형 인턴십",
            company: "네이버클라우드(주)",
            career: "신입",
            education: "대졸 이상",
            location: "서울/경기",
            date: "2021-09-10 23:08:06",
        },
        {
            logo: "Naver",
            title: "2021년 IT엔지니어/Technical Writer 체험형 인턴십",
            company: "네이버클라우드(주)",
            career: "신입",
            education: "대졸 이상",
            location: "서울/경기",
            date: "2021-09-10 23:08:06",
        },
        {
            logo: "Naver",
            title: "2021년 IT엔지니어/Technical Writer 체험형 인턴십",
            company: "네이버클라우드(주)",
            career: "신입",
            education: "대졸 이상",
            location: "서울/경기",
            date: "2021-09-10 23:08:06",
        },
        {
            logo: "Naver",
            title: "2021년 IT엔지니어/Technical Writer 체험형 인턴십",
            company: "네이버클라우드(주)",
            career: "신입",
            education: "대졸 이상",
            location: "서울/경기",
            date: "2021-09-10 23:08:06",
        },
    ]);

    const autoCaruosel = autoCarouselData.map((item, index) => (
        <div className="suggestion-auto-carousel-box" key={index}>
            <div className="suggestion-auto-carousel-logo">{item.logo}</div>
            <div className="suggestion-auto-carousel-title">{item.title}</div>
            <div className="suggestion-auto-carousel-company">{item.company}</div>
            <div className="suggestion-auto-carousel-detail">
                <span>{item.career}</span>
                <span>{item.education}</span>
                <span>{item.location}</span>
            </div>
        </div>
    ));

    const arrowCaruosel = autoCarouselData.map((item, index) => (
        <div className="suggestion-arrow-carousel-box" key={index}>
            <div className="suggestion-arrow-carousel-logo">{item.logo}</div>
            <div className="suggestion-arrow-carousel-title">{item.title}</div>
            <div className="suggestion-arrow-carousel-company">{item.company}</div>
            <div className="suggestion-arrow-carousel-detail">
                <span>{item.career}</span>
                <span>{item.education}</span>
                <span>{item.location}</span>
            </div>
            <div className="suggestion-arrow-carousel-date">{`${item.date.substr(0, 13)}시`}</div>
        </div>
    ));

    return (
        <div className="suggestion-box">
            <div className="suggestion-header">
                <p>추천 기업입니다.</p>
                <p>취업의 기회를 여러분에게 전달해 드립니다.</p>
                <p>포트레이트에서 간편하게 기업 공고를 열람해 보세요.</p>
            </div>
            <div className="suggestion-auto-carousel-container">
                <Slider {...autoCarouselSetting}>{autoCaruosel}</Slider>
            </div>
            <div className="suggestion-arrow-carousel-container">
                <div className="suggestion-category-type">추천 기업 공고</div>
                <Slider {...arrowCarouselSetting}>{arrowCaruosel}</Slider>
            </div>
            <div className="suggestion-sort-container">
                <div className="suggestion-category-type">정렬 기준</div>
                <div className="suggestion-input-container">
                    <form className="suggestion-form">
                        <i className="suggestion-search-icon" alt="search_icon" />
                        <input className="suggestion-input" onChange={(e) => searchInputHandler(e)} value={inputVal} placeholder="기업 공고 검색"></input>
                        <button className={"suggestion-button suggestion-area-button " + (areaSelectOpen ? "suggestion-button-focus" : null)} onClick={(e) => selectOpener(e, areaSelectOpen, setAreaSelectOpen)}>
                            지역▽
                        </button>
                        {areaSelectOpen ? (
                            <div className="suggestion-area-container">
                                <ul className="suggestion-area-ul" value={sido} onChange={(e) => handleSelect(e, setSiDo)}>
                                    {siDoData.map((city, index) => {
                                        return (
                                            <li className="suggestion-area-li" key={index} value={city}>
                                                <button type="button" onFocus={(e) => liButtonFocus(e)} onBlur={(e) => liButtonFocusOut(e)} className="suggestion-li-button">
                                                    {city}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {sido !== "시/도 선택" ? (
                                    <select className="suggestion-area-select">
                                        {areaData[sido].map((city, index) => {
                                            return (
                                                <option className="suggestion-select-option" key={index} value={sido}>
                                                    {city}
                                                </option>
                                            );
                                        })}
                                    </select>
                                ) : null}
                            </div>
                        ) : null}
                        <button className={"suggestion-button suggestion-job-button " + (jobSelectOpen ? "suggestion-button-focus" : null)} onClick={(e) => selectOpener(e, jobSelectOpen, setJobSelectOpen)}>
                            직종▽
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
