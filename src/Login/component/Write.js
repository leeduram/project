import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Link, useNavigate } from "react-router-dom";
import '../css/reset.css';
import '../css/Write.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const Write = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const navigate = useNavigate();
	const [formData,setFormData] = useState({
		title:undefined,
		content:undefined
	});
	const navi = useNavigate();

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])


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
	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]:e.target.value
		})
		if (e.target.value === ''){
			setFormData({
				...formData,
				title:undefined
			})
		}
	}
	const handleChangeContent = (e) => {
			setFormData({
				...formData,
				content:e === '<p><br></p>' ? undefined : e
			});
	}
	const handleClickPost = (e) => {
		e.preventDefault();
		if (formData.title == undefined || formData.content == ''){
			alert("제목과 내용은 필수로 기입하셔야 합니다.\n다시 확인해 주세요.")
			return;
		}
		axios.post('http://localhost:8080/api/post',{
			title: formData.title,
			content: formData.content
		},{withCredentials: true})
		.then(() => {
			navi('/board');
		})
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
			<main className="write-main" onClick={handleSetFalse}>
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
				<div className="write-container" onClick={handleSetFalse}>
					<p>글 작성</p>
					<div>
						<input onChange={handleInputChange} name="title"/>
						<ReactQuill theme="snow" value={formData.content} 
						onChange={handleChangeContent} 
						formats={['bold', 'italic', 'underline', 'link', 'blockquote']}
						/>
					</div>
					<div>
						<div className="write-btn">
							<button onClick={handleClickPost}>작성</button>
							<Link to='/board'>취소</Link>
						</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Write;