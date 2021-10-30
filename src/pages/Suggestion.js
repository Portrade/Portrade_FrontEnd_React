import React, { useState } from "react";
import "./css/suggestion.css";

import Slider from "react-slick";

const Suggestion = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
    };
    const settings2 = {
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        slidesToScroll: 1,
    };

    const [inputVal, setInpuVal] = useState("");

    const searchInputHandler = ({ target: { value } }) => {
        setInpuVal(value);
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
                <Slider {...settings}>{autoCaruosel}</Slider>
            </div>
            <div className="suggestion-arrow-carousel-container">
                <div className="suggestion-category-type">추천 기업 공고</div>
                <Slider {...settings2}>{arrowCaruosel}</Slider>
            </div>
            <div className="suggestion-sort-container">
                <div className="suggestion-category-type">정렬 기준</div>
                <div className="suggestion-input-container">
                    {/* <select className="member-input" name="city">
                        {cityList.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select> */}
                    <form className="suggestion-form">
                        <i className="suggestion-search-icon" alt="search_icon" />
                        <input className="suggestion-input" onChange={(e) => searchInputHandler(e)} value={inputVal} placeholder="기업 공고 검색"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
