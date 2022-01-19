import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import profileImg from "../../images/portfolio/comment-profile.png";
import "./css/commentSection.css";

const props = {
	"comments": [
		{
			"id":"1L",
			"profileImage":"https://cdn.pixabay.com/photo/2021/02/02/12/59/madame-monet-5973960_960_720.jpg",
			"content":"댓글1 내용입니다."
		},
		{
			"id":"2L",
			"profileImage":"",
			"content":"댓글2 내용입니다."
		}
	],
	"page": {
		"totalPage":2,  //총 페이지수
	  "totalElement":5  //총 댓글 수
	}
}
const comments = props.comments;

const CommentSection = ({ id, commentCount }) => {
	// const user = JSON.parse(localStorage.getItem('webToken'));
	// const [comments, setComments] = useSelector((state) => state.comments);
	const dispatch = useDispatch();
	// const { id } = useParams();
	const [comment, setComment] = useState('');

	useEffect(() => {
		// dispatch(getComments(id));
	}, []); //[id]);

	const handleComment = (e) => {
		console.log(comment);

		setComment('');
	}

	return (
		<div className="portfolioModal-portfolioComment-content">
			<h3>댓글 {commentCount}개</h3>
			<div className="portfolioModal-writeComment">
				<div className="portfolioModal-writeComment-profile"></div>
				<div className="portfolioModal-writeInput">
					<textarea className="portfolioModal-InputField" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
				</div>
				<button className="portfolioModal-submitButton" onClick={handleComment}>확인</button>
			</div>
			
			{comments?.map((comment, i) => (
				<div className="portfolioModal-comment" key={i}> {/* comment.id */}
					<div className="portfolioModal-comment-profile"><img src={comment.profileImage ? comment.profileImage : profileImg } alt="profileImg" /></div>
					<div className="portfolioModal-comment-text-content">
						<div className="portfolioModal-comment-text-name"><strong>{comment.id}</strong></div>
						<div className="portfolioModal-comment-text-detail">
							{comment.content}
						</div>
					</div>
				</div>
			))}

			<div className="portfolioModal-comment-moreButton">
				<div>댓글 더 보기 ↓</div>
			</div>
		</div>
	)
};

export default CommentSection;