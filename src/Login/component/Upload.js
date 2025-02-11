import React from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import './reset.css'
import styles from './Upload.module.css'

const Upload = () => {
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
					<Link to='/community1' style={{
						color:"white",
						fontSize:"30px",
						fontWeight:"400",
						textDecoration:"none"
					}}>Community</Link>
				</div>
				<img src={user} alt="profile" className={styles.imgbtn} onClick={handleClick}></img>
			</header>
			<main>
				<div className={styles.container}>
					<div className={styles.create}>Create A New Game</div>
					<div className={styles.content}>
						<div className={styles.title}>
							<p>Title</p>
							<input></input>
						</div>
						<div className={styles.url}>
							<p>URL</p>
							<input></input>
						</div>
						<div className={styles.price}>
							<p>Price</p>
							<input type="number" name="setPrice"></input>
						</div>
						<div className={styles.ubox}>
							<p>Upload</p>
							<div>Add File</div>
						</div>
						<div className={styles.desc}>
							<p type="text" name="description">Description</p>
							<input></input>
						</div>
						<div className={styles.tag}>
							<p>Tag</p>
							<input></input>
						</div>
						<div className={styles.btn}>
							<div>Create</div>
						</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Upload;