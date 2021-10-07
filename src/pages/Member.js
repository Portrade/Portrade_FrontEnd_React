import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/member.css";

const Member = () => {
    const universityList = [
        "가천대학교",
        "가톨릭관동대학교",
        "가톨릭대학교",
        "가야대학교",
        "감리교학대학교",
        "강남대학교",
        "강릉원주대학교",
        "강원대학교",
        "건국대학교",
        "건국대학교글로컬캠퍼스",
        "건양대학교",
        "경기대학교",
        "경남대학교",
        "경동대학교",
        "경북대학교",
        "경상국립대학교",
        "경성대학교",
        "경운대학교",
        "경인교대학교",
        "경일대학교",
        "경주대학교",
        "경찰대학 ",
        "경희대학교",
        "계명대학교",
        "고려대학교",
        "고려대학교세종캠퍼스",
        "고신대학교",
        "공군사관학교",
        "공주대학교",
        "공주교대학교",
        "광신대학교",
        "광운대학교",
        "광주대학교",
        "광주가톨릭대학교",
        "광주과학기술원",
        "광주교대학교",
        "광주여자대학교",
        "국군간호사관학교",
        "국민대학교",
        "군산대학교",
        "극동대학교",
        "금강대학교",
        "금오공과대학교",
        "김천대학교",
        "꽃동네대학교",
        "나사렛대학교",
        "남부대학교",
        "남서울대학교",
        "단국대학교",
        "대구대학교",
        "대구가톨릭대학교",
        "대구경북과학기술원 ",
        "대구교대학교",
        "대구예술대학교",
        "대구한의대학교",
        "대신대학교",
        "대전대학교",
        "대전가톨릭대학교",
        "대전신학대학교",
        "대진대학교",
        "덕성여자대학교",
        "동국대학교",
        "동국대학교경주캠퍼스 ",
        "동덕여자대학교",
        "동명대학교",
        "동서대학교 ",
        "동서울대학교",
        "동신대학교",
        "동아대학교",
        "동양대학교",
        "동의대학교",
        "루터대학교",
        "명지대학교",
        "목원대학교",
        "목포대학교",
        "목포가톨릭대학교",
        "목포해양대학교",
        "배재대학교",
        "백석대학교",
        "부경대학교",
        "부산대학교",
        "부산가톨릭대학교",
        "부산교대학교",
        "부산외국어대학교",
        "부산장신대학교",
        "서울대학교",
        "삼육대학교",
        "상명대학교",
        "상지대학교",
        "서강대학교",
        "서경대학교",
        "서울과학기술대학교",
        "서울교대학교",
        "서울기독대학교",
        "서울시립대학교",
        "서울신학대학교",
        "서울여자대학교",
        "서울장신대학교",
        "서울한영대학교",
        "서원대학교",
        "선문대학교",
        "성결대학교",
        "성공회대학교",
        "성균관대학교",
        "성신여자대학교",
        "세명대학교",
        "세종대학교",
        "세한대학교",
        "송원대학교",
        "수원대학교",
        "수원가톨릭대학교",
        "숙명여자대학교",
        "순천대학교",
        "순천향대학교",
        "숭실대학교",
        "신경대학교",
        "신라대학교",
        "신한대학교",
        "아신대학교",
        "아주대학교",
        "안동대학교",
        "안양대학교",
        "연세대학교",
        "연세대학교미래캠퍼",
        "영남대학교",
        "영남신학대학교",
        "영산대학교",
        "영산선학대학교",
        "예수대학교",
        "예원예술대학교",
        "용인대학교",
        "우석대학교",
        "우송대학교",
        "울산대학교",
        "울산과학기술원",
        "원광대학교",
        "위덕대학교",
        "유원대학교",
        "육군사관학교",
        "을지대학교",
        "이화여자대학교",
        "인제대학교",
        "인천대학교",
        "인천가톨릭대학교",
        "인하대학교",
        "장로회신학대학교",
        "전남대학교",
        "전북대학교",
        "전주대학교",
        "전주교대학교",
        "제주대학교",
        "제주국제대학교",
        "조선대학교",
        "중부대학교",
        "중앙대학교",
        "중앙승가대학교",
        "중원대학교",
        "진주교대학교",
        "차의과학대학교",
        "창신대학교",
        "창원대학교",
        "청운대학교",
        "청주교대학교",
        "청주대학교",
        "초당대학교",
        "총신대학교",
        "추계예술대학교",
        "춘천교대학교",
        "충남대학교",
        "충북대학교",
        "침례신학대학교",
        "칼빈대학교",
        "케이씨대학교",
        "평택대학교",
        "포항공과대학교",
        "한경대학교",
        "한국과학기술원 ",
        "한국교대학교",
        "한국교대학교",
        "한국국제대학교",
        "한국기술교대학교",
        "한국방송통신대학교",
        "한국산업기술대학교",
        "한국성서대학교",
        "한국예술종합학교",
        "한국외국어대학교",
        "한국전통문화대학교",
        "한국체육대학교",
        "한국항공대학교",
        "한국해양대학교",
        "한남대학교",
        "한동대학교",
        "한라대학교",
        "한려대학교",
        "한림대학교",
        "한밭대학교",
        "한서대학교",
        "한성대학교",
        "한세대학교",
        "한신대학교",
        "한양대학교",
        "한양대학교ERICA캠퍼스",
        "한일장신대학교",
        "해군사관학교",
        "협성대학교",
        "호남대학교",
        "호남신학대학교",
        "호서대학교",
        "호원대학교",
        "홍익대학교",
    ];
    const jobCategory = [
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

    const [Checked1, setChecked1] = useState(false);
    const [Checked2, setChecked2] = useState(false);

    const checkHandler = (id) => {
        if (id === 1) {
            setChecked2(false);
            setChecked1(true);
        } else if (id === 2) {
            setChecked1(false);
            setChecked2(true);
        }
    };

    return (
        <div className="member-box">
            <div className="member-left-box">
                <Link to="/" className="member-logo-text">
                    PORTRADE
                </Link>
                <div className="member-intro-text">
                    <p>PORTRADE와 함께</p>
                    <p>취업을 향한 여정을 시작해보세요.</p>
                </div>

                <div className="member-slogan-text">
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                    <p>다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.</p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                </div>

                <div className="member-more-info-text">
                    <Link to="/introduce">플랫폼 더 알아보기 &gt;</Link>
                </div>
            </div>

            <div className="member-right-box">
                <div className="member-text">PORTRADE로 시작하기</div>
                <div className="member-intro">
                    <div>포트레이트의 회원이 되시면, 포트폴리오 등록 및 기업 공고 열람</div>
                    <div>서비스를 간편하게 이용하실 수 있습니다.</div>
                </div>

                <fieldset className="member-fieldset school-fieldset">
                    <legend>학교찾기</legend>
                    <select className="member-input">
                        {universityList.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <div className="member-graduation-checkbox">
                    <input type="checkbox" checked={Checked1} onChange={() => checkHandler(1)} />
                    <legend>재학</legend>
                    <input type="checkbox" checked={Checked2} onChange={() => checkHandler(2)} />
                    <legend>졸업</legend>
                </div>

                <fieldset className="member-fieldset">
                    <legend>생년월일</legend>
                    <input className="member-input" type="date" />
                </fieldset>
                <fieldset className="member-fieldset">
                    <legend>이름</legend>
                    <input className="member-input" type="text" />
                </fieldset>
                <fieldset className="member-fieldset">
                    <select className="member-input">
                        {jobCategory.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <div className="member-agree-option">
                    <div>
                        <div>
                            <input type="checkbox" id="member-info-agree" />
                            <label htmlFor="member-info-agree" className="member-info-agree">
                                포트레이트 가입 약관에 모두 동의 합니다.
                            </label>
                        </div>
                        <div className="member-agree-content">스터닝 이용약관(필수), 개인정보취급방침(필수), 마케팅정보 수집동의(선택)</div>
                    </div>
                </div>
                <div className="member-btn-start">포트레이드 시작하기</div>
            </div>
        </div>
    );
};

export default Member;
