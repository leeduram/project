import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Link } from "react-router-dom";
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
	});
	const [formData,setFormData] = useState({
		title:undefined,
		content:undefined
	});

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])


	const handleClick=() => {
		setProfileOpen(!profileOpen)
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
		const cleanedContent = formData.content.replace(/<\/?[^>]+(>|$)/g, "").trim();
		if (formData.title == undefined || cleanedContent == ''){
			alert("제목과 내용은 필수로 기입하셔야 합니다.\n다시 확인해 주세요.")
			return
		}
		axios.post('http://localhost:8080/api/post',{
			title: formData.title,
			content: cleanedContent
		},{withCredentials: true})
		.then(() => {
			window.location.href = '/board'
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
					<Link to='/fix'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main className="write-main">
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
				<div className="write-container">
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