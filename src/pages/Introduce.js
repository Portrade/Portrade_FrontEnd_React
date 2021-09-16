import React from "react";
import "./css/introduce.css";

import Developer from "../components/developer/Developer";

const Introduce = () => {
    return (
        <div className="introduce-container">
            <div className="introduce-box">이미지</div>

            <div className="introduce-intro-box">
                <div className="introduce-intro-content">
                    <div className="introduce-first_intro-desc">
                        <div>
                            <span className="introduce-focus">PORTRADE</span>는 당신과 기업의 연결고리 입니다.
                        </div>
                    </div>
                </div>
                <div className="introduce-intro-content">
                    <div className="introduce-second_intro-desc">
                        <div>
                            코로나 19로 인해, 취업 한파가 장기화되며 취직이 어려운 지금, 포트레이트는 디자이너에게 한정된 기존 포트폴리오 사이트를 개선하여, 분야에 상관 없이 누구나 포트폴리오를 자유롭개 공유할 수 있는 공간입니다.
                            포트레이트는 디자인에 국한된 한계점을 넘어서 모든 분야의 사람들이 포트폴리오를 업로드 할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>

            <div className="introduce-vision-box">
                <div className="introduce-vision-content">
                    <div className="introduce-first_vision-desc">
                        <div>로고</div>
                    </div>
                </div>
                <div className="introduce-vision-content">
                    <div className="introduce-second_vision-desc">
                        <div className="introduce-vision-title">포트레이트의 비전</div>
                        <div>포트레이트는 디자이너에 국한된 기존의 사이트에서 벗어나, 다양한 청년들의 가능성을 발굴합니다. 다양한 분야의 포트폴리오 등록의 기회를 제공하며 성장의 여정을 함께합니다.</div>
                        <div>다양한 분야의 청년들과 함께 더 넓은 무대로 나아가는 것이 저희 포트레이트의 비전입니다.</div>
                    </div>
                </div>
            </div>

            <div className="introduce-catch-box">
                <div className="introduce-catch-content">
                    <div className="introduce-catch-desc">
                        <div className="introduce-catch-title">가치 있는 포트폴리오를,<br />더 나은 전시회로</div>
                        <div className="introduce-catch-detail">
                            포트레이트는 디자이너에 국한된 기존의 사이트에서 벗어나, 다양한 청년들의 가능성을 발굴합니다. 다양한 분야의 포트폴리오 등록의 기회를 제공하며 성장의 여정을 함께합니다. 포트레이트는 디자이너에 국한된 기존의
                            사이트에서 벗어나, 다양한 청년들의 가능성을 발굴합니다.다양한 분야의 포트폴리오 등록의 기회를 제공하며 성장의 여정을 함께합니다. 포트레이트는 디자이너에 국한된 기존의 사이트에서 벗어나, 다양한 청년들의 가능성을
                            발굴합니다. 다양한 분야의 포트폴리오 등록의 기회를 제공하며 성장의 여정을 함께합니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className="introduce-linkerbell-box">
                <div className="introduce-linkerbell-title">Linker Bell</div>
                <div className="introduce-linekerbell-intro">포트레이트를 제작한 개발자 입니다.</div>
                <div className="introduce-linekerbell-desc">
                    사이트에 문제가 발생 할 시, 피터팬의 팅커벨처럼 여러분들을 바로 도와줄 수 있는 개발자입니다.<br />저희 링커벨은 취업준비생의 열정이 담긴 초상화를 더 넓은 무대에서 전시할 수 있도록 도와드립니다.
                </div>
            </div>

            <div className="introduce-developer-container">
                <div className="introduce-developer-partname">Front end</div>
                <div className="introduce-developer-part">
                    <Developer />
                    <Developer />
                    <Developer />
                    {/* <div className="introduce-developer"></div> */}
               </div>

                <div className="introduce-developer-partname">Back end</div>
                <div className="introduce-developer-part">
                    <Developer />
                    <Developer />
                    <Developer />
                </div>

                <div className="introduce-developer-partname">UX/UI Design</div>
                <div className="introduce-developer-part">
                    <Developer />
                </div>
            </div>

            <div className="introduce-contact-box">
                <div className="introduce-contact-content">
                    <div className="introduce-contact-nav">Contact</div>
                </div>
                <div className="introduce-contact-content">
                    <div className="introduce-contact-detail">
                        <div>여러분들과 소통을 하며 성장하는 포트레이트가 되겠습니다.<br />함께 한 걸음 한 걸음 나아가는 플랫폼이 되겠습니다.</div>
                        <div><br />포트레이트에 대해 더 자세히 알아보세요.<br />EMAIL 문의 portrade@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
