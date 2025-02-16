import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/-reset.css';
import '../css/Modify.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

const Modify = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const [formData,setFormData] = useState({
		title:undefined,
		content:undefined
	});
	const contentRef = useRef(null); // useRef로 content 상태 추적
	const {uid} = useParams();
	const changeUid = Number(uid);

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
	const handleChangeContent = (value) => {
		// 무한 루프 방지: ref를 사용하여 상태가 변경된 후 렌더링을 막음
		if (contentRef.current !== value) {
			// <p> 태그 제거
			const cleanedContent = value.replace(/<p>/g, '').replace(/<\/p>/g, '').trim();
			setFormData({
				...formData,
				content:cleanedContent === '<br>' ? undefined : cleanedContent
			});
			contentRef.current = value; // 최신 값으로 업데이트
		}
	}
	const handleClickModify = (e) => {
		e.preventDefault();
		if (formData.title == undefined || formData.content == undefined){
			alert("제목과 내용은 필수로 기입하셔야 합니다.\n다시 확인해 주세요.")
			return
		}
		axios.patch('http://localhost:8080/api/update',{
			uid: changeUid,
			title: formData.title,
			content: formData.content
		},{
			withCredentials: true  // 쿠키를 서버에 전달하도록 설정
		}).then(() => {
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
			<main className="modify-main">
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<div className="logout">
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
				<div className="modify-container">
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