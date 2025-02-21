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
	const navigate = useNavigate();
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
	const handleLogout = () => {
		axios.post('http://localhost:8080/api/logout', null, { withCredentials: true })
		.then(() => {
			navigate('/signin');
		})
	}
	const handleSetFalse = (e) => {
		if (e.target === e.currentTarget) {
			setProfileOpen(false);
		}
	}
	const handleClickModify = () => {
		if (loginData.nickname !== postData.user.nickname) {
			alert('본인 글만 수정할 수 있습니다.')
			return;
		}
		navi(`/modify/${postData.uid}`)
	}
	const handleClickDelete = () => {
		const confirmDelete = window.confirm("삭제하시겠습니까?");
		if (confirmDelete) {
			axios.delete(`http://localhost:8080/api/delete/${postData.uid}`, {
				withCredentials: true
			}).then(() => {
				alert("삭제되었습니다.");
				navi('/board');
			}).catch(() => {
				alert("본인 글만 삭제할 수 있습니다.")
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
					<Link to='/upload'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main className="post-main" onClick={handleSetFalse}>
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<div className="logout" onClick={handleLogout}>
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
                <div className="post-container" onClick={handleSetFalse}>
                    <div>
                        <div className="post-title">
                            <p>{postData.title}</p>
                            <div className="post-box">
                                <p>{postData.user ? postData.user.nickname : '알 수 없음'}</p>
                                <p>{postData.writeDate}</p>
                            </div>
                        </div>
                        <div className="post-content">
                            <div dangerouslySetInnerHTML={{ __html: postData.content }}/>
						</div>
                    </div>
                    <div className="post-flex">
                        <div className="post-btn">
							<div onClick={handleClickModify}>수정</div>
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