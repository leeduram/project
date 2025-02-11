import React from "react";
import { Link } from "react-router-dom";
import b from '../img/b.png';
import user from '../img/user.png';
import '../css/-reset.css'
import styles from '../css/.module.css'

const  = () => {
	const handleClick=() => {
		alert("유저 관련 툴 만들기 or figma 따라가기")
	}

	return(
		<>
			<header className={styles.loginHeader}>
				<div className={styles.site}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/home' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Home</Link>
						<Link to='/upload' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Upload</Link>
					<Link to='/community' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Community</Link>
				</div>
				<img src={user} alt="profile" className={styles.imgbtn} onClick={handleClick}></img>
			</header>
			<main>
				
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default ;