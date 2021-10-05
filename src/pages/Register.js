import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./css/register.css";
import ActionCreators from "../_actions";

const initialState = { userId: "", password: "", confirmPassword: "" };

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = () => {
    //     console.log(formData);
    //     dispatch(ActionCreators.signup({
    //         "userId": "test1",
    //         "name": "김가입",
    //         "password": "1234Aa@@",
    //         "college": "가나대학교",
    //         "graduation": "true",
    //         "wantedJob":"PROGRAMMING",
    //         "birthDate": "19700312"
    //     }));
    // };

    return (
        <div className="register-box">
            <div className="register-left-box">
                <div className="register-text">포트레이드 가입하기</div>
                <div className="register-intro">
                    <div>
                        포트레이트의 회원이시라면, 포트폴리오 등록 및 기업 공고
                        열람 서비스를 간편하게 이용하실 수 있습니다.
                    </div>
                </div>

                <fieldset className="register-fieldset">
                    <legend>이메일 또는 아이디 입력</legend>
                    <input className="register-input" name="userId" type="text" onChange={handleChange} />
                </fieldset>
                <fieldset className="register-fieldset">
                    <legend>비밀번호</legend>
                    <input className="register-input" name="password" type="password" onChange={handleChange} />
                </fieldset>
                <div className="password-option">
                    <div>
                        <label className="password-info">
                            * 영문 대소문자, 숫자, 특수문자를 3가지 이상으로
                            조합하여 6자 이상 입력해 주세요
                        </label>
                    </div>
                </div>
                <fieldset className="register-fieldset">
                    <legend>비밀번호</legend>
                    <input className="register-input" name="confirmPassword" type="password" onChange={handleChange} />
                </fieldset>

                <div className="btn-register">
                    <Link to="/member">추가 정보 입력하기</Link>
                    {/* <button onClick={handleSubmit}>추가 정보 입력하기</button> */}
                </div>
            </div>

            <div className="register-right-box">
                <Link to="/" className="register-logo-text">
                    PORTRADE
                </Link>
                <div className="register-intro-text">
                    <p>PORTRADE와 함께</p>
                    <p>취업을 향한 여정을 시작해보세요.</p>
                </div>

                <div className="register-slogan-text">
                    <p>
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.
                    </p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                    <p>
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.
                    </p>
                    <p>취업난 속에서 기업과 청년의 연결을 도모합니다.</p>
                </div>

                <div className="register-more-info-text">
                    <Link to="/introduce">플랫폼 더 알아보기 &gt;</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
