import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import b from '../img/b.png';
import user from '../img/user.png';
import out from '../img/logout.png'
import '../css/-reset.css'
import styles from '../css/Write.module.css'
import axios from "axios";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import "../css/writePage.css";

const Write = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	});
	const [formData,setFormData] = useState({
		title:"",
		content:""
	});

	useEffect(() =>{
		userData()
	},[])


	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const userData = () => {
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	}
	const handleInputChange = (e) => {
		setFormData({
			...data,
			[e.target.name]:e.target.value
		})
	}
	const handleChangeContent = (e) => {
		setFormData({
			...data,
			content:e
		})
	}
	const handleClickPost = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/post',{
			title: formData.title,
			content: formData.content
		},{
			withCredentials: true  // 쿠키를 서버에 전달하도록 설정
		}).catch(() => {
			console.log(formData.title)
			console.log(formData.content)
			//alert("제목이나 내용이 비었습니다.\n모두 기입해주세요.")
		})
	}

	return(
		<>
			<header className={styles.loginHeader}>
				<div className={styles.site}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/homeo' className={styles.categoryBtn}>Home</Link>
					<Link to='/fix' className={styles.categoryBtn}>Upload</Link>
					<Link to='/board' className={styles.categoryBtn}>Community</Link>
				</div>
				<img src={user} alt="profile" className={styles.imgBtn} onClick={handleClick}></img>
			</header>
			<main className="write-main">
				{profileOpen && <div className={styles.profileBox}>
					<img src={user} className={styles.profileImg}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className={styles.mypage}>My Page</div>
					<div className={styles.logout}>
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
				<div className={styles.container}>
					<div className={styles.mainTitle}>글 작성</div>
					<div className={styles.post}>
						<input className={styles.title} onChange={handleInputChange} name="title"/>
						<ReactQuill theme="snow" value={formData.content} onChange={handleChangeContent} />
					</div>
					<div className={styles.bar}>
						<div className={styles.btn}>
							<button onClick={handleClickPost}>작성</button>
							<Link to='/board' className={styles.cancel}>취소</Link>
						</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Write;