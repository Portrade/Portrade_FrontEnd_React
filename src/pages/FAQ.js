import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/faq.css";

const FAQ = () => {
    const [clickCheck1, setClickCheck1] = useState(false);
    const [clickCheck2, setClickCheck2] = useState(false);
    const [clickCheck3, setClickCheck3] = useState(false);
    const [clickCheck4, setClickCheck4] = useState(false);
    const [clickCheck5, setClickCheck5] = useState(false);
    const [clickCheck6, setClickCheck6] = useState(false);
    const [clickCheck7, setClickCheck7] = useState(false);
    const [clickCheck8, setClickCheck8] = useState(false);
    const [clickCheck9, setClickCheck9] = useState(false);
    const [clickCheck10, setClickCheck10] = useState(false);
    const [clickCheck11, setClickCheck11] = useState(false);

    const postBlockArr = [
        { text: "포트폴리오 업로드는 어떻게 하나요?", var: clickCheck1, func: setClickCheck1, answer: "로그인 이후 http://localhost:3000/portfolio 에서 등록하면 됩니다." },
        { text: "포트폴리오를 비공개로 전환하고 싶어요.", var: clickCheck2, func: setClickCheck2, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "포트폴리오를 암호화해서 공유하고 싶어요.", var: clickCheck3, func: setClickCheck3, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "게시물에서 개인 사이트 링크 연결은 어떻게 하나요?", var: clickCheck4, func: setClickCheck4, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "아이디 혹은 비밀번호를 잊었습니다.", var: clickCheck5, func: setClickCheck5, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "이메일을 변경하고 싶어요.", var: clickCheck6, func: setClickCheck6, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "다른 사람의 포트폴리오를 저장하고 싶어요.", var: clickCheck7, func: setClickCheck7, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "팔로우 관리를 하고싶어요.", var: clickCheck8, func: setClickCheck8, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "다른 사람의 포트폴리오를 저장하고 싶어요.", var: clickCheck9, func: setClickCheck9, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "포트폴리오 평가 기록은 어디서 볼 수 있나요?", var: clickCheck10, func: setClickCheck10, answer: "해당 기능은 추후 개발 예정입니다." },
        { text: "팔로우 관리를 하고싶어요.", var: clickCheck11, func: setClickCheck11, answer: "해당 기능은 추후 개발 예정입니다." },
    ];

    const clickHandler = (state, setStateFunc) => {
        setStateFunc(!state);
    };
    return (
        <div className="faq-wrap">
            <div className="faq-board">
                <div className="faq-path">홈 &nbsp;&gt;&nbsp; 고객센터 &nbsp; &gt;&nbsp; 1:1 문의</div>
                <div className="faq-post-wrap">
                    <div className="faq-text">
                        <p> 자주 묻는 질문 </p>
                        <p> 포트레이트에 궁금한 점이 있으신가요? </p>
                        <p> 자주 묻는 질문 FAQ 리스트를 확인해보세요. </p>
                    </div>
                    {postBlockArr.map((item, index) => (
                        <div className="faq-post-block" key={index}>
                            <div className="faq-post-block-column" onClick={() => clickHandler(item.var, item.func)}>
                                <div className="faq-post-text">
                                    {item.text}
                                    <span>{item.var ? " 🔼" : " 🔽"}</span>
                                </div>
                            </div>
                            {item.var ? <div className="faq-post-hidden-box">{item.answer}</div> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className="faq-help-wrap">
                <div className="faq-help-text">
                    <span>원하는 답변을 찾기 어려우신가요?</span>
                    <span>링커벨에게 직접 문의 해주세요</span>
                    <span>최대한 빠르게 도와드리겠습니다!</span>
                    <Link to="/inquiry" className="faq-help-btn">
                        <p>1:1 문의 하기</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default FAQ;
