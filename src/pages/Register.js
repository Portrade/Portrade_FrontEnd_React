import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import "./css/register.css";
import Input from "../components/auth/Input";

const Register = (props) => {
    const [userId, setUserId] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
    const formComplete = userId && passwordReg && confirmPasswordReg;

    console.log(props);
    
    return (
        <div className="register">

            <div className="register-left">
                <div className="register-left-box">
                    <div className="register-name">
                        회원가입
                    </div>
                    <div className="register-intro">
                        포트레이트의 회원이시라면, 포트폴리오 등록 및 기업 공고
                        열람 서비스를 간편하게 이용하실 수 있습니다.
                    </div>

                    <form>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Input name="userId" label="이메일 또는 아이디" type="text" required autoFocus setChange={setUserId} />
                            </Grid>
                            <Grid item>
                                <Input name="passwordReg" label="비밀번호" type="password" required setChange={setPasswordReg}
                                    helperText="* 영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 6자 이상 입력해 주세요"
                                />
                            </Grid>
                            <Grid item>
                                <Input name="confirmPasswordReg" label="비밀번호 확인" type="password" required error={passwordReg!==confirmPasswordReg} setChange={setConfirmPasswordReg} />
                            </Grid>
                        </Grid>

                        {/* <fieldset className="register-fieldset">
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
                        </fieldset> */}

                        {/* <Link className={formComplete ? "btn-register" : "btn-register-disabled"}
                            to={formComplete ? {
                                pathname: "/member",
                                state: {
                                    userId: userId,
                                    passwordReg: passwordReg,
                                }
                            } : null}>
                                추가 정보 입력하기
                        </Link> */}

                        {formComplete && passwordReg===confirmPasswordReg ?
                            <Link className="btn-register" to={{pathname: "/member", state: {userId: userId, passwordReg: passwordReg}}} >
                                추가 정보 입력하기
                            </Link> :
                            <Link className="btn-register-disabled" to="/member" onClick={(e) => e.preventDefault()} >
                                추가 정보 입력하기
                            </Link>
                        }
                        
                    </form>

                </div>
            </div>

            <div className="register-right-wallpaper">
                <div className="register-right-wallpaper-img"></div>
            </div>
            <div className="register-right">
                <div className="register-right-box">
                    <Link to="/" className="register-logo">
                        PORTRADE
                    </Link>
                    <div className="register-slogan">
                        PORTRADE와 함께<br />
                        취업을 향한 여정을 시작해보세요.
                    </div>
                    <div className="register-slogan-text">
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                        취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                        다양한 분야의 포트폴리오를 업로드 할 수 있는 공간입니다.<br/>
                        취업난 속에서 기업과 청년의 연결을 도모합니다.<br/>
                    </div>
                    <Link to="/introduce" className="register-more-info">
                        플랫폼 더 알아보기 &gt;
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Register;
