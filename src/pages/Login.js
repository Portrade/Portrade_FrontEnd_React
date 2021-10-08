import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import "./css/login.css";

import ActionCreators from "../_actions";
import Input from "../components/auth/Input";


const initialState = { userId: "", password: "" };

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);

    const config = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ActionCreators.login(formData, history));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSuccessGoogle = async (res) => {
        dispatch(ActionCreators.login(res.isSignedIn(), res.Zb.access_token, res.profileObj.email));
        window.sessionStorage.setItem("access_token", res.Zb.access_token);
        // let jwtToken = await Axios.post("http://ec2-3-38-6-25.ap-northeast-2.compute.amazonaws.com:8080/oauth/jwt/google", JSON.stringify(res), config);
        // if (jwtToken.status === 200) {
        //     localStorage.setItem("jwtToken", jwtToken.data);
        //     history.replace("/");
        // }
    };

    const onFailureGoogle = (err) => {
        console.log(err);
    };

    return (
        <div className="login">

            {/* 왼쪽 박스 */}
            <div className="login-left-wallpaper">
                <div className="login-left-wallpaper-img"></div>
            </div>
            <div className="login-left">
                <div className="login-left-box">
                    <Link to="/" className="login-logo">
                        POTRADE
                    </Link>
                    <div className="login-slogan">
                        PORTRADE와 함께<br />
                        취업을 향한 여정을 시작해보세요.
                    </div>
                    <div className="login-slogan-text">
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                        취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                        취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                    </div>
                    <Link to="/register" className="login-btn-register">
                        회원가입
                    </Link>
                    <Link to="/introduce" className="login-more-info">
                        플랫폼 더 알아보기 &gt;
                    </Link>
                </div>
            </div>

            {/* 오른쪽 박스 */}
            <div className="login-right">
                <div className="login-right-box">
                    <div className="login-name">
                        로그인
                    </div>
                    <div className="login-guide">
                        포트레이트의 회원이 되시면, 포트폴리오 등록 및 기업 공고 열람<br/>
                        서비스를 간편하게 이용하실 수 있습니다.
                    </div>

                    <GoogleLogin
                        clientId="988674118538-gog8quj6fimubp2b8dc6jhecui5e88cd.apps.googleusercontent.com" //앱키 추후 변경
                        onSuccess={(res) => onSuccessGoogle(res)}
                        onFailure={(err) => onFailureGoogle(err)}
                        cookiePolicy="none"
                        className="google-login"
                        buttonText="Google 계정으로 로그인"
                    />

                    <div className="login-or-text">
                        <span>or</span>
                    </div>

                    <form className="email-login" onSubmit={handleSubmit}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item >
                                <Input name="userId" label="이메일 또는 아이디" type="text" autoFocus handleChange={handleChange} />
                            </Grid>
                            <Grid item>
                                <Input name="password" label="비밀번호" type="password" handleChange={handleChange} />
                            </Grid>
                        </Grid>

                        <button className="btn-login" type="submit">로그인</button>

                        <div className="login-option">
                            <div>
                                <input type="checkbox" id="login-info-save" />
                                <label htmlFor="login-info-save" className="login-info-save">
                                    아이디 / 비밀번호 저장
                                </label>
                            </div>
                            <p className="login-find-pw">비밀번호를 잊으셨나요?</p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
