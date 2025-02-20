import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/reset.css';
import '../css/Modify.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const Modify = () => {
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
	const {uid} = useParams();
	const changeUid = Number(uid);
	const navi = useNavigate();

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])
	useEffect(() => {
		axios.get(`http://localhost:8080/api/view/${changeUid}`, { withCredentials: true })
		.then((resp) => {
			setFormData({
				title: resp.data.title,
				content: resp.data.content
			})
		})
	},[changeUid])

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
	const handleClickModify = (e) => {
		e.preventDefault();
		if (formData.title == undefined || formData.content == ''){
			alert("제목과 내용은 필수로 기입하셔야 합니다.\n다시 확인해 주세요.")
			return
		}
		axios.patch('http://localhost:8080/api/update',{
			uid: changeUid,
			title: formData.title,
			content: formData.content
		},{withCredentials: true})
		.then(() => {
			navi('/board');
		}).catch(() => {
			alert("제목과 내용은 필수로 기입하셔야 합니다.\n다시 확인해 주세요.")
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
			<main className="modify-main" onClick={handleSetFalse}>
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
				<div className="modify-container" onClick={handleSetFalse}>
					<p>글 수정</p>
					<div>
						<input value={formData.title} onChange={handleInputChange} name="title"></input>
						<ReactQuill value={formData.content} onChange={handleChangeContent}/> 
					</div>
					<div>
						<div className="modify-btn">
							<button onClick={handleClickModify}>수정</button>
							<Link to='/board'>취소</Link>
						</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Modify;