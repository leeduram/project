import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../css/-reset.css'
import '../css/SignUp.css'
import b from '../img/b.png'
import developer from '../img/developer.png'

const Signup = () => {
	const [data,setData] = useState([{
		uid: 0,
		email: '',
		password: '',
		name: '',
		nickname: '',
		signupDate: '',
		auth: '',
		accountStatus: ''
	}])
	const [email,setEmail] = useState('')
	const [emailError,setEmailError] = useState('')
	const [duplicatedEmail,setDuplicatedEmail] = useState('')
	const [pw,setPw] = useState('')
	const [pwError,setPwError] = useState('')
	const [repw,setRepw] = useState('')
	const [repwError,setRepwError] = useState('')
	const [name,setName] = useState('')
	const [nameError,setNameError] = useState('')
	const [nickname,setNickname] = useState('')
	const [nicknameError,setNicknameError] = useState('')
	const [duplicatedNickname,setDuplicatedNickname] = useState('')
	const btnActivation = email && !emailError && !duplicatedEmail 
	&& pw && !pwError 
	&& repw && !repwError 
	&& name && !nameError 
	&& nickname && !nicknameError && !duplicatedNickname
	const emailList = data.map((data) => {
		return data.email
	})
	const nicknameList = data.map((data) => {
		return data.nickname
	})
	const lowerEmailList = emailList.map((data) => {
		return data.toLowerCase();
	})
	const lowerNicknameList = nicknameList.map((data) => {
		return data.toLowerCase();
	})

	useEffect(() => {
		axios.get('http://localhost:8080/api/allData')
		.then((resp) => {
			setData(resp.data)
		})
	},[])
	useEffect(() => {
		if(repw === ''){
			setRepwError('')
		}else{
			if(repw === pw){
				setRepwError('')
			}else{
				setRepwError('비밀번호가 일치하지 않습니다.')
			}
		}
	},[repw, pw])

	const handleChangeEmail = (e) => {
		const value = e.target.value;
		const lowerValue = value.toLowerCase();
		setEmail(value);
		if(value === ''){
			setEmailError('')
			setDuplicatedEmail('')
		}else{
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			if(!emailRegex.test(value)){
				setEmailError('올바른 이메일 형식이 아닙니다.')
			}
			else{
				setEmailError('')
			}
			if(emailList.includes(value)){
				setDuplicatedEmail('위 email은 사용할 수 없습니다.')
			}else if(lowerEmailList.includes(lowerValue)){
				setDuplicatedEmail('위 email은 사용할 수 없습니다.')
			}else{
				setDuplicatedEmail('')
			}
		}
	}
	const handleChangePw = (e) => {
		const value = e.target.value;
		setPw(value);
		if(value === ''){
			setPwError('')
		}else{
			const pwRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/
			if(!pwRegex.test(value)){
				setPwError('비밀번호는 최소 하나의 영어, 숫자를 포함하여 8자리 이상 기입하세요.')
			}else{
				setPwError('')
			}
		}
	}
	const handleChangeRepw = (e) => {
		const value = e.target.value;
		setRepw(value);
	}
	const handleChangeName = (e) => {
		const value = e.target.value;
		setName(value);
		if(value === ''){
			setNameError('')
		}else{
			const nameRegex = /^[가-힣]{2,}$/
			if(!nameRegex.test(value)){
				setNameError('공백없이 한글로 최소 2자 이상 입력하세요.')
			}else{
				setNameError('')
			}
		}
	}
	const handleChangeNickname = (e) => {
		const value = e.target.value;
		const lowerValue = value.toLowerCase();
		setNickname(value);
		if(value === ''){
			setNicknameError('')
			setDuplicatedNickname('')
		}else{
			const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,}$/
			if(!nicknameRegex.test(value)){
				setNicknameError('특수문자,공백을 제외하고 2자이상 입력하세요.')
			}else{
				setNicknameError('')
			} 
			if(nicknameList.includes(value)){
				setDuplicatedNickname('이미 사용중인 닉네임입니다.')
			}else if(lowerNicknameList.includes(lowerValue)){
				setDuplicatedNickname('이미 사용중인 닉네임입니다.')
			}else{
				setDuplicatedNickname('')
			}
		}
	}
	const handleClick = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/api/signup',{
			email: email,
			password: pw,
			name: name,
			nickname: nickname
		}).then((resp) => {
			alert('회원가입에 감사드립니다.\n로그인 페이지로 이동합니다.')
			window.location.href = '/signin'
		}).catch((err) => {
			alert('error: '+err)
		})
	}

	return(
		<>
			<header className="header-logo">
				<img src={b} alt="logo"></img>
				<p>bZip</p>
			</header>
			<main className="signup-main">
				<div className="signup-container">
					<div>
						<h1>Create Account</h1>
						<div className="signup-id">
							<p className="signup-label">E-mail ID</p>
							<input type="email" name="email" onChange={handleChangeEmail}
							style={{outline:duplicatedEmail? '1px solid red':'none'}}/>
							{emailError && <p className="signup-error">{emailError}</p>}
							{duplicatedEmail && <p className="signup-error">{duplicatedEmail}</p>}
						</div>
						<div className="signup-pw">
							<p className="signup-label">Password</p>
							<input type="password" name="password" onChange={handleChangePw}/>
							{pwError && <p className="signup-error">{pwError}</p>}
						</div>
						<div className="signup-repw">
							<p className="signup-label">Re-Password</p>
							<input type="password" name="repw" onChange={handleChangeRepw}
							style={{outline:repwError? '1px solid red':'none'}}/>
							{repwError && <p className="signup-error">{repwError}</p>}
						</div>
						<div className="signup-name">
							<p className="signup-label">Name</p>
							<input type="text" name="name" onChange={handleChangeName}/>
							{nameError && <p className="signup-error">{nameError}</p>}
						</div>
						<div className="signup-nickname">
							<p className="signup-label">Nickname</p>
							<input type="text" name="nickname" onChange={handleChangeNickname}
							style={{outline:duplicatedNickname? '1px solid red':'none'}}/>
							{nicknameError && <p className="signup-error">{nicknameError}</p>}
							{duplicatedNickname && <p className="signup-error">{duplicatedNickname}</p>}
						</div>
						<div className="signup-btn">
							<button onClick={handleClick}
							disabled={!btnActivation}>Sign Up</button>
							<div className="signup-text-btn">
								<p>Already have an account?</p>
								<Link to='/signin'>Sign In</Link>
							</div>
						</div>
					</div>
					<img src={developer} alt="developer"></img>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Signup;