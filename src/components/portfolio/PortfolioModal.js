import React, { useEffect } from "react";
import "./css/portfolioModal.css";
import CommentSection from "./CommentSection";


const portfolio = {
    "id": 1,
    "creator": "제작자",
    "title": "포트폴리오 제목1",
    "description": "포트폴리오 설명1",
    "category": "programming",
    "isPublic": true,

    "viewCount": 3,
    "likeCount": 0,
    "commentCount": 0,

    "createdDate": "2021-10-08T01:15:08.190736",
    "lastModifiedDate": "2021-10-08T01:15:08.187736",

    "mainImage": {
        // "url": "https://s3.ap-northeast-2.amazonaws.com/portrade-bucket/upload/portfolio_mainImage_1633623308198.png",
        "url": "https://cdn.unsell.design/2020/10/aa4c3220-creative-portfolio-layout-template-preview1.jpg",
        "name": "portfolio_mainImage.png",
        "extension": "png"
    },
    "contentFiles": [
        {
            "url": "https://s3.ap-northeast-2.amazonaws.com/portrade-bucket/upload/twister_1633623308532.png",
            "name": "twister.png",
            "extension": "png"
        },
        {
            "url": "https://s3.ap-northeast-2.amazonaws.com/portrade-bucket/upload/ace_1633623308888.png",
            "name": "ace.png",
            "extension": "png"
        },
    ]
}


const PortfolioModal = (props) => {
    const user = JSON.parse(window.sesssionStorage.getItem('webToken'));
    const createdDate = portfolio.createdDate.split(/-|T/);
    // const [like, setLike] = useState();

    const handleLike = async () => {
        // dispatch like post
    }

    const handleSave = async () => {
        // dispatch save post
    }

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { openModal, handleModal, header } = props;
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={openModal ? "openModal modal" : "modal"}>
            {openModal ? (
                <div className="portfolioModal-wrapper">

                    <button className="portfolioModal-closeButton" onClick={handleModal}>
                        &times;
                    </button>
                    
                    <div className="portfolioModal-header">
                        <div className="portfolioModal-header-leftContent">
                            <div className="portfolioModal-header-title">{portfolio.title}</div>
                            <div className="portfolioModal-header-date">업로드 날짜 ({createdDate[0]} - {createdDate[1]} - {createdDate[2]})</div>
                        </div>
                        <div className="portfolioModal-header-rightContent">
                            <div className="">조회수 {"\xa0\xa0" + portfolio.viewCount}</div>
                            <div className="">좋아요 {"\xa0\xa0" + portfolio.likeCount}</div>
                            <div className="">댓글 {"\xa0\xa0" + portfolio.commentCount}</div>
                        </div>
                    </div>

                    <div className="portfolioModal-content">
                        <div className="portfolioModal-imgContainer">
                            <img src={portfolio.mainImage.url} alt="portfolio_main_image" />
                        </div>
                        <div className="portfolioModal-button-group">
                            <button className="portfolioModal-likeButton">좋아요</button>
                            <button className="portfolioModal-saveButton">저장하기</button>
                        </div>
                        <div className="portfolioModal-profile-content">
                            <div className="portfolioModal-profile">
                                <div className="portfolioModal-profile-Avatar"></div>
                                <div className="portfolioModal-profile-desc">
                                    <div className="portfolioModal-profile-name">{portfolio.creator}</div>
                                    <div className="portfolioModal-profile-state">직종 및 구직 상태</div>
                                </div>
                                <button className="portfolioModal-profile-followButton">팔로우</button>
                            </div>
                            <div className="portfolioModal-portfolioCardList">
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                                <div className="portfolioModal-portfolioCard">
                                    <div className="portfolioModal-thumbnail"></div>
                                </div>
                            </div>
                        </div>

                        <CommentSection commentCount={portfolio.commentCount} />

                        {/* <div className="portfolioModal-portfolioComment-content">                            
                            <div className="portfolioModal-commentList">
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolioModal-comment">
                                    <div className="portfolioModal-comment-profile"></div>
                                    <div className="portfolioModal-comment-text-content">
                                        <div className="portfolioModal-comment-text-name">댓글 사용자 이름</div>
                                        <div className="portfolioModal-comment-text-detail">
                                            댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다. 댓글 텍스트 입니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolioModal-comment-moreButton">
                                <div>댓글 더 보기 ↓</div>
                            </div>
                        </div> */}

                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default PortfolioModal;
