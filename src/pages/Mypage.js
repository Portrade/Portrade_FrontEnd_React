import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InsertPortfolio, MyPortfolio } from "../components/mypage";
import { myPageApi } from "../_api";
import "./css/myPage.css";

const Mypage = () => {
    const [file, setFile] = useState("");
    // const avatarImg = useSelector((state) => );
    const [user, setUser] = useState([]);

    const onChange = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const response = await myPageApi.uploadProfileImage(formData); //->redux로
        // console.log(response.data.profileImageUrl);
        setFile(response?.data.profileImageUrl);

        // const reader = new FileReader();
        // reader.onload = async () => {
        //     if (reader.readyState === 2) {
        //         setFile(reader.result);
        //         let response = await myPageApi.uploadProfileImage(file); //->redux로
        //     }
        // }
        // reader.readAsDataURL(e.target.files[0]);
    }

    useEffect(async () => {
        let user = await myPageApi.getMyProfile(sessionStorage.userId);
        setUser(user.data); // user = user.data;
        setFile(user.data.profileImageUrl);
        console.log("user", user.data);
    }, []);

    return (
        <div className="mypage-container">
            <p className="mypage-desc">여러분만의 개성을 넣어보세요. 헤더 최적 치수 1920 x 300</p>
            
            <div className="mypage-wrap">
                {/* 프로필 카드 */}
                <div className="mypage-profile-card">
                    <div className="mypage-profile-card-header">
                        <div className="mypage-avatar-container">
                            {file ? <img src={file} alt="avatarImage" /> : null}
                            <label for="mypage-avatar-upload">+</label>
                            <input type="file" id="mypage-avatar-upload" accept="image/*" onChange={onChange} />
                        </div>

                        <p className="mypage-user-name">{user.name}</p>
                        <p className="mypage-user-details-tag">사용자 소속 및 구직 상태</p>
                        <p className="mypage-user-details">{user.job}</p>
                    </div>

                    <p className="mypage-profile-button-label">내 프로필 편집</p>
                    <p className="mypage-profile-button-label">구직 상태 편집</p>
                    <p className="mypage-profile-button-label">포트폴리오 관리</p>

                    <p className="mypage-signup-date">멤버 가입일 : 2021년 1월 1일</p>
                </div>

                {/* 프로필 컨텐츠 */}
                <div className="mypage-profile-contents">
                    <p className="mypage-profile-contents-header">나의 인사이트</p>
                    <table className="mypage-profile-history">
                        <thead>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>포트폴리오 열람</td>
                                <td>프로젝트 평가</td>
                                <td>프로젝트 댓글</td>
                                <td>팔로우</td>
                                <td>팔로워</td>
                            </tr>
                        </tbody>
                    </table>

                    <ul className="mypage-profile-tab-control">
                        <li className="mypage-profile-tab">
                            <Link to="">포트폴리오 등록</Link>
                        </li>
                        <li className="mypage-profile-tab">
                            <Link to="">나의 포트폴리오</Link>
                        </li>
                        <li className="mypage-profile-tab">
                            <Link to="">평가</Link>
                        </li>
                        <li className="mypage-profile-tab">
                            <Link to="">저장된 항목</Link>
                        </li>
                        <li className="mypage-profile-tab">
                            <Link to="">구독관리</Link>
                        </li>
                    </ul>
                    
                    <InsertPortfolio/>
                    <MyPortfolio/>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
