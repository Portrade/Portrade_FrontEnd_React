import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { portfolioApi } from "../../_api";
import "./css/portfolioModal.css";
import "./css/portfolioUpload.css";

const initialForm = {
    title: "",
    description: "",
    category: "",
    isPublic: "true",
    mainImageFile: "",
    contentFiles: [],
}

const PortfolioUpload = (props) => {
    const { openModal, handleModal } = props;
    const file = useSelector((state) => state.portfolio.file);
    const [form, setForm] = useState(initialForm);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        setForm({
            ...form,
            contentFiles: file //[file]//?.name]
        });
    }, [file]); //[]);
    // console.log("form:", form); //["contentFiles"]); //[file?.name]); //[file?.name]);
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUpload = async () => {
        let formData = new FormData();
        formData.append("title", JSON.stringify(form["title"]));
        formData.append("description", JSON.stringify(form["description"]));
        formData.append("category", JSON.stringify(form["category"]));
        formData.append("isPublic", JSON.stringify(form["isPublic"]));
        formData.append("mainImageFile", form["mainImageFile"]);
        formData.append("contentFiles", form["contentFiles"]);
        
        // for (let pair of formData.entries()) {
        //     console.log(pair[0], " --- ", pair[1]);
        // }

        try {
            let response = await portfolioApi.registerPortfolio(formData);
            if (response.status !== 201) throw new Error("201 status를 반환하지 않음");
        } catch {
            alert("정상적으로 처리되지 않았습니다.");
        } finally {
            // history.push("/notice");
        }
    }

    const onChange = (e) => {
        // const name = e.target.files[0].name;
        setForm({ ...form, mainImageFile: e.target.files[0] });

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                // console.log("Reader:", reader.result);
                setMainImage(reader.result);
        //         setForm({
        //             ...form,
        //             mainImageFile: reader.result
        //         });
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    // console.log("mainImage:", form["mainImageFile"]);

    // const categoryList = [
    //     "개발/프로그래밍",
    //     "보안/네트워크",
    //     "데이터사이언스",
    //     "마케팅",
    //     "미술",
    //     "뷰티",
    //     "기타",
    // ];

    return (
        <div className={openModal ? "openModal modal" : "modal"}>
            {openModal ? (
                    <div className="portfolioUpload-container">
                        <div className="portfolioUpload">
                        
                        {!form["mainImageFile"] ? (
                            <div className="portfolioUpload-img">
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 대표이미지
                                    <span>(필수)</span>
                                </p>
                                <div className="portfolioUpload-thumbnail">
                                    <p>RGB형식의 JPG <br /> 대표이미지 최적 치수 413 x 309</p>
                                    <label for="thumbnail-upload">+</label>
                                    <input type="file" id="thumbnail-upload" accept="image/*" onChange={onChange} />
                                </div>
                            </div>) : (
                                <div className="portfolioUpload-img">
                                    <div className="portfolioUpload-thumbnail-hover"></div>
                                    <img src={ mainImage /*form["mainImageFile"]*/ } alt="uploadedThumbnail"  />
                                    <div className="portfolioUpload-reupload">
                                        <div className="portfolioUpload-add-reupload-caption">이미지 변경하기</div>
                                        <label className="portfolioUpload-add-reupload-button" for="thumbnail-upload">+</label>
                                        <input type="file" id="thumbnail-upload" accept="image/*" onChange={onChange} />
                                    </div>
                                </div>
                        )}
                        

                        {/* <div className="portfolioRegister-add">
                            <div className="portfolioRegister-add-reupload-hover"></div>
                            <img src={file} alt="uploadedImage" />
                            <div className="portfolioRegister-add-reupload">
                                <div className="portfolioRegister-add-reupload-caption">이미지 변경하기</div>
                                <label className="portfolioRegister-add-reupload-button" for="image-upload">+</label>
                                <input type="file" id="image-upload" accept="image/*" onChange={onChange} />
                            </div>
                        </div> */}
                        



                            <div className="portfolioUpload-options">
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 제목
                                    <span>(필수)</span>
                                </p>
                                <input type="text" name="title" placeholder="포트폴리오 제목을 입력하세요." onChange={handleChange} />

                                <p className="portfolioUpload-options-header">
                                    카테고리
                                    <span>(필수)</span>
                                </p>
                                <select name="category" onChange={handleChange} >
                                    <option value="">=== 카테고리 ===</option>
                                    <option value="programming">개발/프로그래밍</option>
                                    <option value="">보안/네트워크</option>
                                    <option value="">데이터사이언스</option>
                                    <option value="">마케팅</option>
                                    <option value="">미술</option>
                                    <option value="">뷰티</option>
                                    <option value="">기타</option>
                                    {/* {categoryList.map((item, index) => (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    ))} */}
                                </select>
                            
                                <p className="portfolioUpload-options-header">
                                    포트폴리오 설명
                                    <span>(최대 500자)</span>
                                </p>
                                <textarea name="description" placeholder="포트폴리오에 대한 추가적인 설명을 추가해보세요." onChange={handleChange} />
                                
                                <p className="portfolioUpload-options-header">공개범위 설정</p>
                            <select name="isPublic" onChange={handleChange} >
                                    <option value="true">모든 사용자</option>
                                    <option value="false">나만 보기</option>
                                </select>

                            </div>
                        </div>
                        <button className="portfolioUpload-btn" onClick={handleUpload}>업로드</button>
                        <button className="portfolioUpload-closebtn" onClick={handleModal}>&times;</button>
                    </div>
            ) : null}
        </div>
    );
};

export default PortfolioUpload;