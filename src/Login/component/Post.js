import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/reset.css';
import '../css/Post.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const Post = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const [postData,setPostData] = useState({
		uid:null,
		title:'',
		nickname:'',
		writeDate:'',
		content:''
	})
	const {uid} = useParams();
	const navi = useNavigate();

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])
	useEffect(() => {
		axios.get(`http://localhost:8080/api/view/${uid}`, { withCredentials: true })
		.then((resp) => {
			const post = resp.data;
			const formattedDate = new Date(post.writeDate).toLocaleDateString('ko-kr');
			post.writeDate = formattedDate
			setPostData(post)
		})
	},[uid])

	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const handleClickDelete = () => {
		const confirmDelete = window.confirm("삭제하시겠습니까?");
		if (confirmDelete) {
			axios.delete(`http://localhost:8080/api/delete/${postData.uid}`, {
				withCredentials: true
			}).then(() => {
				alert("삭제되었습니다.");
				navi('/board');
			})
		}
	}

	return(
		<>
			<header className="user-header">
				<div className="user-logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="user-category">
					<Link to='/home'>Home</Link>
					<Link to='/fix'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main className="post-main">
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<Link to='/signin' className="logout">
						<img src={out}></img>
						<p>Log Out</p>
					</Link>
				</div>}
                <div className="post-container">
                    <div>
                        <div className="post-title">
                            <p>{postData.title}</p>
                            <div className="post-box">
                                <p>{postData.user ? postData.user.nickname : '알 수 없음'}</p>
                                <p>{postData.writeDate}</p>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>{postData.content}</p>
						</div>
                    </div>
                    <div className="post-flex">
                        <div className="post-btn">
                            <Link to={`/modify/${postData.uid}`}>수정</Link>
                            <div onClick={handleClickDelete}>삭제</div>
                            <Link to='/board'>취소</Link>
                        </div>
                    </div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Post;