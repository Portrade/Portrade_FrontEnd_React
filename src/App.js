import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Error, Home, Introduce, InquiryPost, InquiryDetail, Login, Member, Inquiry, Mypage, Help, Register, Suggestion, Notice, NoticeDetail, NoticePost, NoticeEdit, FAQ, Portfolio, PortfolioRegister } from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./css/app.css";

const App = (props) => {
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
                <Route exact path="/portfolio/register" component={PortfolioRegister} />
                <Route exact path="/suggestion" component={Suggestion} />
                <Route exact path="/help" component={Help} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/member" component={Member} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/introduce" component={Introduce} />
                <Route exact path="/notice" component={Notice} />
                <Route exact path="/notice/post" component={NoticePost} />
                <Route exact path="/notice/:id" component={NoticeDetail} />
                <Route exact path="/notice/:id/edit" component={NoticeEdit} />
                <Route exact path="/inquiry" component={Inquiry} />
                <Route exact path="/inquiry/post" component={InquiryPost} />
                <Route exact path="/inquiry/:id" component={InquiryDetail} />
                <Route exact path="/faq" component={FAQ} />
                <Route component={Error} />
            </Switch>
            {successPath && <Footer />}
        </>
    );
};

export default withRouter(App);
