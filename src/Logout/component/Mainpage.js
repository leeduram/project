import React from "react"
import { Link } from "react-router-dom"
import b from '../img/b.png'
import man from '../img/man.jpg'
import '../css/-reset.css'
import styles from '../css/Mainpage.module.css'

const Mainpage = () => {

	return(
		<>
			<header className={styles.unloginHeader}>
				<div className={styles.logo}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/homex' className={styles.categoryBtn}>Home</Link>
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
				<div className={styles.container}>
					<h1>Show off your talent</h1>
					<div className={styles.content}>
						<div className={styles.ptag}>
							<p>Even small projects created by individuals<br/>
							can receive warm encouragement from users.</p>
							<p>Encourage developers through your sponsorship<br/>
							and meet more high-quality games</p>
							<p>Don't hesitate to challenge yourself</p>
							<div>Join us now</div>
						</div>
						<img src={man} alt="mainscreen"></img>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Mainpage;