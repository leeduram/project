import React, { useState } from "react"
import { Link } from "react-router-dom"
import b from '../img/b.png'
import player from '../img/player.jpg'
import '../css/-reset.css'
import '../css/SignIn.css'
import axios from "axios"

const Signin = () => {
	const [email,setEmail] = useState('')
	const [pw,setPw] = useState('')
	const bntActivation = email && pw
	
	const handleChangeEmail = (e) => {
	const value = e.target.value;
		setEmail(value);
	}
	const handleChangePw = (e) => {
		const value = e.target.value;
		setPw(value);
	}
	const handleClick = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/login',{
			email: email,
			password: pw
		},{withCredentials: true}).then((resp) => {
			window.location.href = '/home'
		}).catch((err) => {
			alert('아이디 혹은 비밀번호가 틀렸습니다.')
		})
	}

	return(
		<>
			<header className="only-logo">
				<img src={b} alt="logo"></img>
				<p>bZip</p>
			</header>
			<main className="signin-main">
				<div className="container">
					<div>
						<div className="title">
							<h1>WelCome Back!</h1>
							<p>please  enter your details.</p>
						</div>
						<div className="id">
							<p>E-mail ID</p>
							<input type="email" name="email" onChange={handleChangeEmail}/>
						</div>
						<div className="pw">
							<p>Password</p>
							<input type="password" name="password" onChange={handleChangePw}/>
						</div>
						<button onClick={handleClick}
						disabled={!bntActivation}>Sign In</button>
						<div className="line"/>
						<Link to='/signup'>Have an account?</Link>
					</div>
					<img src={player} alt='player'></img>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Signin;