import React, { useState } from "react"
import { Link } from "react-router-dom"
import b from '../img/b.png'
import player from '../img/player.jpg'
import '../css/-reset.css'
import styles from '../css/SignIn.module.css'
import axios from "axios"

const Signin = () => {
	const [email,setEmail] = useState('')
	const handleChangeEmail = (e) => {
		const value = e.target.value;
		setEmail(value);
	}

	const [pw,setPw] = useState('')
	const handleChangePw = (e) => {
		const value = e.target.value;
		setPw(value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/login',{
			email: email,
			password: pw
		}).then((resp) => {
			window.location.href = '/homeo'
		}).catch((err) => {
			alert('아이디 혹은 비밀번호가 틀렸습니다.')
		})
	}
	const bntActivation = email && pw

	return(
		<>
			<header className={styles.unloginHeader}>
				<img src={b} alt="logo"></img>
				<p>bZip</p>
			</header>
			<main>
				<div className={styles.container}>
					<div className={styles.signin}>
						<div className={styles.title}>
							<h1>WelCome Back!</h1>
							<p>please  enter your details.</p>
						</div>
						<div className={styles.id}>
							<p>E-mail ID</p>
							<input type="email" name="email" onChange={handleChangeEmail}/>
						</div>
						<div className={styles.pw}>
							<p>Password</p>
							<input type="password" name="password" onChange={handleChangePw}/>
						</div>
						<button className={styles.signinBtn} onClick={handleClick}
						disabled={!bntActivation}>Sign In</button>
						<div></div>
						<Link to='/signup' className={styles.signupBtn}>Have an account?</Link>
					</div>
					<img src={player} alt='player'></img>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Signin;