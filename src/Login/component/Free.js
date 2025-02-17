import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Free.css';
import '../css/reset.css';
import b from '../img/b.png';
import cpay from '../img/credit_card.png';
import kpay from '../img/kakao.png';
import out from '../img/logout.png';
import user from '../img/user.png';
import vovmain from '../img/vovmain.png';
import vovmini1 from '../img/vovmini1.png';
import vovmini2 from '../img/vovmini2.png';
import vovmini3 from '../img/vovmini3.png';
import vovmini4 from '../img/vovmini4.png';

const Free = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		email:'',
		nickname:'',
		signupDate:''
	})
	const [expand,setExpand] = useState('vovmini1')
	const [showInfo,setShowInfo] = useState(false)
	const [payOpen,setPayOpen] = useState(false);
	const [amount,setAmount] = useState('');
	const [payMethod,setPayMethod] = useState('');

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://cdn.iamport.kr/v1/iamport.js";
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			const IMP = window.IMP;
			IMP.init('imp18800044')
		}

		return () => {
			document.head.removeChild(script);
		}
	},[])

	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const handleClickExpand = (image) => {
		setExpand(image)
	}
	const handleClickShowInfo = () => {
		setShowInfo(!showInfo)
	}
	const handleClickPayOpen = () => {
		setPayOpen(!payOpen)
	}
	const handleChangeAmount = (e) => {
		setAmount(e.target.value)
	}
	const handleSelectMethodo = (method) => {
		setPayMethod(method);
	};
	const handlePay = () => {
		if (!amount || isNaN(amount) || amount <= 0) {
			alert("올바른 금액을 입력해주세요.")
			return;
		}

		const IMP = window.IMP;
		if (payMethod === 'kakao') {
			IMP.request_pay({
				pg:"kakaopay",
				pay_method:"card",
				merchant_uid:`order_${new Date().getTime()}`,
				name:"인디 게임 개발자 후원",
				amount:Number(amount),
				buyer_name:loginData.nickname,
				buyer_email:loginData.email,
				buyer_tel:"01012345678",
				buyer_addr:"서울시 강동구",
				buyer_postcome:"123-456"
			}, function (rsp) {
				if (rsp.success) {
					alert('결제 성공')
					axios.post('http://localhost:8080/api/payment',{
						amount: Number(amount),
						method: payMethod,
						userId: loginData.email
					}).then(() => {
						alert('결제가 완료되었습니다.')
					});
				} else {
					alert(`결제 실패: ${rsp.error_msg}`)
				}
			})
		}
	}
	const handleSelectKakao = () => {
		setPayMethod('kakao')
		handlePay();
	}

	return(
		<>
			<header className="user-header">
				<div className="user-logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="user-category">
					<Link to='/home'>Home</Link>
					<Link to='/fix'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main className="free-main">
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<Link to='/signin' className="logout">
						<img src={out}></img>
						<p>Log Out</p>
					</Link>
				</div>}
				<div className="free-container">
					<img src={vovmain} alt="mainscreen"></img>
					<div className="free-photo">
						<div className="free-expand">
							{expand === 'vovmini1' && 
							(<img src={vovmini1} alt="expand"/>)}
							{expand === 'vovmini2' && 
							(<img src={vovmini2} alt="expand"/>)}
							{expand === 'vovmini3' && 
							(<img src={vovmini3} alt="expand"/>)}
							{expand === 'vovmini4' && 
							(<img src={vovmini4} alt="expand"/>)}
						</div>
						<div className="free-default">
							<img src={vovmini1} alt="screen"
							onClick={() => handleClickExpand('vovmini1')}/>
							<img src={vovmini2} alt="screen"
							onClick={() => handleClickExpand('vovmini2')}/>
							<img src={vovmini3} alt="screen"
							onClick={() => handleClickExpand('vovmini3')}/>
							<img src={vovmini4} alt="screen"
							onClick={() => handleClickExpand('vovmini4')}/>
						</div>	
					</div>
					<div className="free-description">
						<div className="free-post">
							<div className="free-attention">
								<p>ATTENTION</p>
								<p>Don't post major spoilers\uncensored spoilers in the comment section. These messages will be deleted.</p>
								<p><strong>["Funy" comments\memes regarding the update will be deleted or banned]</strong></p>
							</div>
							<div className="free-warning">
								<p>WARNING</p>
								<p>If you having trouble accessing to Story mode - go to tutorial, wait for Achievement pop up, go to settings, apply settings.</p>
								<p>NOTE:</p>
								<p>Since the game started to use 7z format, you gotta download the 7zip archiver.</p>
							</div>
							<div className="free-foreword">
								<p>Foreword</p>
								<p>This game is a "Pre-Alpha" that means it is far from perfect, but it has quite a lot of stuff to play with and to look at. It has a basic gameplay loop, plenty of different mechanics, gameplay elements, stuff to play around with etc
								You can support the game on Patreon and give it more chances to get into release state.</p>
							</div>
							<div className="free-description2">
								<p>Description</p>
								<p>You work as a scientist in the isolated research lab in the mountains of Switzerland. Your task is to gather signals from space, analyze them, process them and sell them to get points.</p>
								<p>You can get regular signals and objects like dwarf planets and stars, or you can get something "unusual" or even "strange" and "unexplainable".</p>
								<p>The game has 40+ days and unique events, 150+ unique signals, plenty of secrets, mysteries and easter eggs.</p>
								<p>You can report problems and give ideas\suggestions on Discord Server</p>
							</div>
							<div className="free-faq">
								<p>Quick FAQ</p>
								<p><strong>Q</strong>: Will there be a multiplayer in the future?<br/>
								<strong>A</strong>: Most likely not, due to the lack of networking experience and lack of foundation for net in the game.</p>
								<p><strong>Q</strong>: Why game uses so much resources?<br/>
								<strong>A</strong>: This might be caused by "Volumetric Light" setting, disable it and it should be better. Also you can lower the shadows, effects, draw distance, but setting shadows to 0 is not recommended if you want a decent picture.</p>
								<p><strong>Q</strong>: How to use custom content (pictures, radio, tv etc)<br/>
								<strong>A</strong>: There are entries for these in Help section in main\pause menu, but the asset folder is located at "appdata\local\votv\assets". If you can't see the folder - run your game As Administrator and it will generate the folder.</p>
								<p><strong>Q</strong>: All my settings are at 0; Quality is super pixelated; Completely black\gray screen<br/>
								<strong>A</strong>: Go to Settings &gt; Game and click "Regenerate data.sav" button</p>
								<p><strong>Q</strong>: I don't understand X thing<br/>
								<strong>A</strong>: Go to main menu/pause menu and open click "Help" button to open Help window, you can look up the issue you're having a problem with.</p>
								<p><strong>Q</strong>: Will the game be on Steam one day?<br/>
								<strong>A</strong>: The game will get in Steam eventually, but the game is still quite unfinished so it will take some time to polish it for Steam release.</p>
							</div>
							<div className="free-information">
								<p onClick={handleClickShowInfo}>More Information</p>
								{showInfo && <div>
									<table>
										<tr>
											<td>Status</td>
											<td>In development</td>
										</tr>									<tr>
											<td>Platforms</td>
											<td>Windows</td>
										</tr>									<tr>
											<td>Authors</td>
											<td>mrdrnose</td>
										</tr>									<tr>
											<td>Genre</td>
											<td>Simulation</td>
										</tr>									<tr>
											<td>Tags</td>
											<td>3D, Aliens, Atmospheric, First-Person, Horror, Low-poly, Sci-fi, Space, Unreal Engine</td>
										</tr>									<tr>
											<td>Average session</td>
											<td>A few seconds</td>
										</tr>									<tr>
											<td>Inputs</td>
											<td>Keyboard, Mouse</td>
										</tr>									<tr>
											<td>Accessibility</td>
											<td>Configurable controls, Interactive tutorial</td>
										</tr>
									</table>
								</div>}
							</div>
						</div>
					</div>
					<div className="free-download" onClick={handleClickPayOpen}>
						<p>Download</p>
						<div>Download</div>
					</div>
					{payOpen && <div className="pay-container">
						<div className="pay-title">
							<p>Download</p>
							<p>x</p>
						</div>
						<div className="pay-payment">
							<p>이 게임은 무료입니다. 하지만 적당하다고 생각하시는 가격을 결제하여 
							개발자에게 후원을 할 수 있습니다.</p>
							<p>아니오, 게임만 다운로드 받겠습니다.</p>
							<p>결제 금액</p>
							<input type="number" name="amount" value={amount}
							onChange={handleChangeAmount} placeholder="금액을 입력하세요."></input>
							<p>결제 수단</p>
							<div className="pay-btn">
                                <div className="pay-kakao" onClick={() => handleSelectKakao()}>
                                    <img src={kpay} alt="pay"></img>
                                </div>
                                <div className="pay-card">
                                    <img src={cpay} alt="card"></img>
                                    <p>카드 결제</p>
                                </div>
                            </div>
						</div>
					</div>}
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Free;