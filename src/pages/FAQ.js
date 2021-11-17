import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/faq.css";
import { faqApi } from "../_api";

const FAQ = () => {
    const [postBlockArr, setPostBlockArr] = useState([]);
    const user = JSON.parse(localStorage.getItem("webToken"));

    useEffect(() => {
        async function fetchData() {
            let {
                data: { faqs },
            } = await faqApi.getList();
            setPostBlockArr(faqs);
        }
        fetchData();
    }, []);

    const PostBlock = () => {
        return postBlockArr !== []
            ? postBlockArr.map((item, index) => (
                  <div className="faq-post-block" key={index} onClick={handleClick}>
                      <div className="faq-post-block-column">
                          <div className="faq-post-text">
                              {item.title}
                              <span>{item.var ? " 🔼" : " 🔽"}</span>
                          </div>
                      </div>
                      <div className="faq-post-hidden-box" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
              ))
            : null;
    };

    const handleClick = (e) => {
        console.log(e);
        e.currentTarget.classList.toggle("faq-active");
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
                    <PostBlock />
                </div>
                {user ? (
                    <button className="faq-register-btn">
                        <Link to={"/faq/post"}>자주 묻는 질문 등록</Link>
                    </button>
                ) : null}
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
