import React from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import './reset.css'
import styles from './Download.module.css'

const Download = () => {
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
                <div className={styles.container}>
                    <div className={styles.title}>
                        <p>Download</p>
                    </div>
                    <div className={styles.back}>
                        <p>&lt;- Game Page</p>
                    </div>
                    <div className={styles.file}>
                        <div className={styles.fbox}>
                            <div className={styles.btnp}>
                                <div>Download</div>
                                <p>GameName.zip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Download;