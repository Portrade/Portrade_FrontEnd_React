import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import ActionCreators from "../_actions";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { InputAdornment, Grid, IconButton, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import img from "../images/footer/instagram.png";
import "./css/login.css";

const initialState = { userId: "", password: "" };

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const config = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(ActionCreators.login(formData));
    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

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
            <div className="login-left-img">
                <div className="login-left-img-in"></div>
            </div>
            <div className="login-left">
                <div className="login-left-box">
                    <Link to="/" className="login-logo-text">PORTRADE</Link>
                    <div className="login-intro-text">
                        PORTRADE와 함께<br/>취업을 향한 여정을 시작해보세요.
                    </div>
                    <div className="login-slogan-text">
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                        취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                         취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                    </div>

                    <div className="login-more-info">
                        <Link to="/introduce">플랫폼 더 알아보기 &gt;</Link>
                    </div>

                    <Link to="/register" className="login-btn-register">
                        회원가입
                    </Link>
                </div>
            </div>

            <div className="login-right">
                <div className="login-right-box">
                    <div className="login-text">로그인</div>
                    <div className="login-intro">
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
                        {/* <fieldset className="login-fieldset">
                            <legend>이메일 또는 아이디 입력</legend>
                            <input className="login-input" type="text" />
                        </fieldset>
                        <fieldset className="login-fieldset">
                            <legend>비밀번호</legend>
                            <input className="login-input" type="password" />
                        </fieldset> */}
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <TextField
                                    name="userId"
                                    type="text"
                                    variant="outlined"
                                    label="이메일 또는 아이디"
                                    fullWidth
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    variant="outlined"
                                    label="비밀번호"
                                    fullWidth
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleShowPassword}>
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
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
