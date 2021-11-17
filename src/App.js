import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { Error, FAQPost, Home, Introduce, Login, Member, Mypage, Help, Register, Suggestion, Notice, NoticeDetail, NoticePost, NoticeEdit, FAQ, Portfolio, PortfolioRegister, Inquiry, InquiryPost, InquiryDetail } from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./css/app.css";

const App = (props) => {
    const user = JSON.parse(localStorage.getItem("webToken"));
    const [successPath, setsuccessPath] = useState(false);

    useEffect(() => {
        if (props.location.pathname === "/login" || props.location.pathname === "/register" || props.location.pathname === "/member") {
            setsuccessPath(false);
        } else {
            setsuccessPath(true);
        }
    }, [props.location.pathname]);

    return (
        <>
            {successPath && <Header />}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/register" component={() => (user ? <PortfolioRegister /> : <Redirect to="/login" />)} />
                <Route exact path="/suggestion" component={Suggestion} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/login" component={() => (!user ? <Login /> : <Redirect to="/" />)} />
                <Route exact path="/member" component={() => (!user ? <Member props={props} /> : <Redirect to="/" />)} />
                <Route exact path="/register" render={() => (!user ? <Register props={props} /> : <Redirect to="/" />)} />
                <Route exact path="/mypage" component={() => (user ? <Mypage /> : <Redirect to="/login" />)} />
                <Route exact path="/introduce" component={Introduce} />
                <Route exact path="/notice" component={Notice} />
                <Route exact path="/notice/post" component={() => (user ? <NoticePost /> : <Redirect to="/login" />)} />
                <Route exact path="/notice/:id" component={NoticeDetail} />
                <Route exact path="/notice/:id/edit" component={() => (user ? <NoticeEdit /> : <Redirect to="/login" />)} />
                <Route exact path="/inquiry" component={Inquiry} />
                <Route exact path="/inquiry/post" component={InquiryPost} />
                <Route exact path="/inquiry/:id" component={InquiryDetail} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/faq/post" component={FAQPost} />
                <Route component={Error} />
            </Switch>
            {successPath && <Footer />}
        </>
    );
};

export default withRouter(App);
