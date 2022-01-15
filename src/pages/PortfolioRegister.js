import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";

import PortfolioUpload from "../components/portfolio/PortfolioUpload";
import "./css/portfolioRegister.css";
import types from "../_actions/types";

const PortfolioRegister = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [file, setFile] = useState("");
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        // console.log(e.target.files[0]);
        dispatch({ type: types.PORTFOLIO_REGISTER, data: e.target.files[0] });
        // setFile(e.target.files);
        // console.warn("onChange  ");
        // console.warn(e.target.files[0].name);

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFile(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    return (
        <div className="portfolioRegister-container">
            <p className="portfolioRegister-header">포트폴리오 등록하기</p>

            <div className="portfolioRegister">

                <div className="portfolioRegister-add">
                    {   file
                        ?
                        <div className="portfolioRegister-add">
                            <div className="portfolioRegister-add-reupload-hover"></div>
                            <img src={file} alt="uploadedImage" />
                            <div className="portfolioRegister-add-reupload">
                                <div className="portfolioRegister-add-reupload-caption">이미지 변경하기</div>
                                <label className="portfolioRegister-add-reupload-button" for="image-upload">+</label>
                                <input type="file" id="image-upload" accept="image/*" onChange={onChange} />
                            </div>
                        </div>
                        :
                        <div className="portfolioRegister-add">
                            <p>포트폴리오 파일을 업로드 해보세요</p>
                            <p>지원 파일 형태 : RGB 형식의 JPG</p>
                            <div className="portfolioRegister-img">
                                <label className="portfolioRegister-image-upload" for="image-upload">+</label>
                                <label className="portfolioRegister-image-upload" for="image-upload">+</label>
                                <label className="portfolioRegister-image-upload" for="image-upload">+</label>
                                <input type="file" id="image-upload" accept="image/*" onChange={onChange} />
                            </div>
                            <p>레이아웃을 선택하세요</p>
                        </div>
                    }
                </div>

                <div className="portfolioRegister-options">
                    <div className="portfolioRegister-options-text">
                        <p className="portfolioRegister-options-header">텍스트</p>
                    </div>
                    <div className="portfolioRegister-options-img">
                        <p className="portfolioRegister-options-header">이미지</p>
                    </div>
                    <div className="portfolioRegister-options-video">
                        <p className="portfolioRegister-options-header">비디오</p>
                        <input type="text" placeholder="파일 찾아보기" />
                        <button className="options-btn">적용</button>
                    </div>

                    <div className="portfolioRegister-options-media">
                        <p className="portfolioRegister-options-header">미디어 임베드</p>
                        <input type="text" placeholder="파일 찾아보기" />
                        <button className="options-btn">적용</button>
                    </div>
                </div>
            </div>

            <button className="portfolioRegister-btn" onClick={handleModal}>
                다음 단계
            </button>

            <PortfolioUpload openModal={isModalOpen} handleModal={handleModal} />
        </div>
    );
};

export default PortfolioRegister;
