import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import b from '../img/b.png';
import user from '../img/user.png';
import out from '../img/logout.png'
import '../css/-reset.css'
import styles from '../css/.module.css'
import axios from "axios";

const  = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const userData = () => {
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	}
	useEffect(() =>{
		userData()
	},[])

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
				<img src={user} alt="profile" className={styles.imgbtn} onClick={handleClick}></img>
			</header>
			<main>
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
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default ;