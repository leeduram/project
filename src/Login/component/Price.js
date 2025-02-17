import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/reset.css';
import '../css/Price.css';
import b from '../img/b.png';
import ditdmain from '../img/ditdmain.png';
import ditdmini1 from '../img/ditdmini1.png';
import ditdmini2 from '../img/ditdmini2.png';
import ditdmini3 from '../img/ditdmini3.png';
import ditdmini4 from '../img/ditdmini4.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const Price = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const [expand,setExpand] = useState('ditdmini1');
	const [showInfo,setShowInfo] = useState(false);

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])

	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const handleClickExpand= (image) => {
		setExpand(image)
	}
	const handleClickShowInfo = () => {
		setShowInfo(!showInfo)
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
			<main className="price-main">
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
				<div className="price-container">
					<img src={ditdmain} alt="mainscreen"></img>
					<div className="price-photo">
						<div className="price-expand">
							{expand === 'ditdmini1' && 
							(<img src={ditdmini1} alt="expand"/>)}
							{expand === 'ditdmini2' && 
							(<img src={ditdmini2} alt="expand"/>)}
							{expand === 'ditdmini3' && 
							(<img src={ditdmini3} alt="expand"/>)}
							{expand === 'ditdmini4' && 
							(<img src={ditdmini4} alt="expand"/>)}
						</div>
						<div className="price-default">
							<img src={ditdmini1} alt="screen"
							onClick={() => handleClickExpand('ditdmini1')}/>
							<img src={ditdmini2} alt="screen"
							onClick={() => handleClickExpand('ditdmini2')}/>
							<img src={ditdmini3} alt="screen"
							onClick={() => handleClickExpand('ditdmini3')}/>
							<img src={ditdmini4} alt="screen"
							onClick={() => handleClickExpand('ditdmini4')}/>
						</div>
					</div>
					<div className="price-description">
						<div className="price-post">
							<p>Die in the Dungeon is a <strong>deck-building, turn-based roguelite</strong> where you dont use cards, but <strong>dice!</strong> Try to find the best combination to conquer the <strong>2X-floor dungeon</strong>, but be careful, a frog like you can only get so far before encountering a prey too big to swallow...</p>
							<p>• • •</p>
							<h2>Die in the Dungeon is coming to Steam!</h2>
							<p>Big news today! We're working on a bigger, bolder and overall better version of <strong>Die in the Dungeon for Steam!</strong> There's still a long way to go before launch, but the Steam page is now live:</p>
							<iframe src="https://store.steampowered.com/widget/2026820/" frameborder="0" width="646" height="190"></iframe>
							<h3>The single, most impactful action you can do to support us is wishlisting the game on Steam!</h3>
							<p>Of course, spreading the word among your friends, family and anyone you think can enjoy the game is also really valuable. We want to make everyone aware of this new version we're working on. But you're probably asking youself what will the Steam version include, right? Well, here are some of the features we're planning for it:</p>
							<p>- <strong>Relics!</strong> 👑 </p>
							<p>- A completely new event system!⚖️</p>
							<p>- More <strong>enemies!</strong> New <strong>bosses!</strong> 🐲 </p>
							<p>- Lots of new <strong>dice types and properties!</strong> 🎲</p>
							<p>- A more <strong>complex dungeon</strong> layout! 🗺️</p>
							<p>- And much, much more! 🤐</p>
							<p>Hopefully all this is as exciting to you as it is to us, we've been working on the game for quite some time and we finally feel confident enough to take the leap and try to fulfill Die in the Dungeon's full potential. Let's try and make the best game possible!</p>
							<p><strong>And as always, thank you for supporting the game!</strong> 💪🐸</p>
							<p>• • •</p>
							<p>Oh, one more thing. We will be posting lots of updates about the new Steam version on our discord server (including looking for potential testers in the future), so head there if you're interested:</p>
							<div className="price-information">
								<p onClick={handleClickShowInfo}>More Information</p>
								{showInfo && <div>
									<table>
										<tr>
											<td>Status</td>
											<td>In development</td>
										</tr>									<tr>
											<td>Platforms</td>
											<td>HTML5, Windows, macOS, Linux</td>
										</tr>									<tr>
											<td>Authors</td>
											<td>	Alarts, SexyBuggy, Jaun, MUNDONUEBO</td>
										</tr>									<tr>
											<td>Genre</td>
											<td>Card Game, Role Playing</td>
										</tr>									<tr>
											<td>Made with</td>
											<td>Unity</td>
										</tr>									<tr>
											<td>Tags</td>
											<td>Cute, Deck Building, Dice, Frogs, Pixel Art, Roguelike, Roguelite, Turn-Based Combat</td>
										</tr>									<tr>
											<td>Average session</td>
											<td>About a half-hour</td>
										</tr>									<tr>
											<td>Languages</td>
											<td>English</td>
										</tr>									<tr>
											<td>Inputs</td>
											<td>Mouse</td>
										</tr>									<tr>
											<td>Accessibility</td>
											<td>One button</td>
										</tr>
									</table>
								</div>}
							</div>
						</div>
					</div>
					<div className="price-download">
						<p>Download</p>
						<div>Download</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Price;