import React from "react";
import { Link } from "react-router-dom";
import b from '../img/b.png';
import '../css/-reset.css'
import styles from '../css/.module.css'

const  = () => {

	return(
		<>
			<header className={styles.unloginHeader}>
				<div className={styles.logo}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/home' className={styles.categoryBtn}>Home</Link>
					<Link to='/community1' className={styles.categoryBtn}>Community</Link>
				</div>
				<div className={styles.ui}>
					<div className={styles.signin}>
						<Link to='/signin' className={styles.signinBtn}>Sign In</Link>
					</div>
					<div className={styles.signup}>
						<Link to='/signup' className={styles.signupBtn}>Sign Up</Link>
					</div>
				</div>
			</header>
			<main>
				
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default ;