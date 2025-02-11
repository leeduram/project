import React, { useState } from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import gamepost1main from '../proimg/gamepost1main.png';
import gamepost1screen1 from '../proimg/gamepost1screen1.png';
import gamepost1screen2 from '../proimg/gamepost1screen2.png';
import gamepost1screen3 from '../proimg/gamepost1screen3.png';
import gamepost1screen4 from '../proimg/gamepost1screen4.png';
import './reset.css';
import styles from './Gamepost1.module.css';

const Gamepost1 = () => {
	const handleClick=() => {
		alert("유저 관련 툴 만들기 or figma 따라가기")
	}

	const [expand,setExpand] = useState('gamepost1screen1');
	const handleClick2= (image) => {
		setExpand(image)
	}

	const [showInfo,setShowInfo] = useState(false);
	const handleClick3 = () => {
		setShowInfo(!showInfo)
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
					<img src={gamepost1main} alt="mainscreen"></img>
					<div className={styles.photoZone}>
						<div className={styles.screen}>
							{expand === 'gamepost1screen1' && (<img src={gamepost1screen1} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost1screen2' && (<img src={gamepost1screen2} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost1screen3' && (<img src={gamepost1screen3} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost1screen4' && (<img src={gamepost1screen4} alt="expand" className={styles.expand}/>)}
						</div>
						<div className={styles.photo}>
							<img src={gamepost1screen1} alt="screen"
							onClick={() => handleClick2('gamepost1screen1')}/>
							<img src={gamepost1screen2} alt="screen"
							onClick={() => handleClick2('gamepost1screen2')}/>
							<img src={gamepost1screen3} alt="screen"
							onClick={() => handleClick2('gamepost1screen3')}/>
							<img src={gamepost1screen4} alt="screen"
							onClick={() => handleClick2('gamepost1screen4')}/>
						</div>
					</div>
					<div className={styles.description}>
						<div className={styles.write}>
							<p>Die in the Dungeon is a <span style={{fontWeight:'bold'}}>deck-building, turn-based roguelite</span> where you dont use cards, but <span style={{fontWeight:'bold'}}>dice!</span> Try to find the best combination to conquer the <span style={{fontWeight:'bold'}}>2X-floor dungeon</span>, but be careful, a frog like you can only get so far before encountering a prey too big to swallow...</p>
							<p>• • •</p>
							<h2>Die in the Dungeon is coming to Steam!</h2>
							<p>Big news today! We're working on a bigger, bolder and overall better version of <span style={{fontWeight:'bold'}}>Die in the Dungeon for Steam!</span> There's still a long way to go before launch, but the Steam page is now live:</p>
							<iframe src="https://store.steampowered.com/widget/2026820/" frameborder="0" width="646" height="190"></iframe>
							<h3>The single, most impactful action you can do to support us is wishlisting the game on Steam!</h3>
							<p>Of course, spreading the word among your friends, family and anyone you think can enjoy the game is also really valuable. We want to make everyone aware of this new version we're working on. But you're probably asking youself what will the Steam version include, right? Well, here are some of the features we're planning for it:</p>
							<p>- <span style={{fontWeight:'bold'}}>Relics!</span> 👑 </p>
							<p>- A completely new event system!⚖️</p>
							<p>- More <span style={{fontWeight:'bold'}}>enemies!</span> New <span style={{fontWeight:'bold'}}>bosses!</span> 🐲 </p>
							<p>- Lots of new <span style={{fontWeight:'bold'}}>dice types and properties!</span> 🎲</p>
							<p>- A more <span style={{fontWeight:'bold'}}>complex dungeon</span> layout! 🗺️</p>
							<p>- And much, much more! 🤐</p>
							<p>Hopefully all this is as exciting to you as it is to us, we've been working on the game for quite some time and we finally feel confident enough to take the leap and try to fulfill Die in the Dungeon's full potential. Let's try and make the best game possible!</p>
							<p><span style={{fontWeight:'bold'}}>And as always, thank you for supporting the game!</span> 💪🐸</p>
							<p>• • •</p>
							<p>Oh, one more thing. We will be posting lots of updates about the new Steam version on our discord server (including looking for potential testers in the future), so head there if you're interested:</p>
							<div className={styles.information}>
								<p style={{color:'#006fff',
									textDecoration:'underline',
									cursor:'pointer',
									display:'inline-block'
								}} onClick={handleClick3}>More Information</p>
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
					<div className={styles.download}>
						<p>Download</p>
						<div>Download</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Gamepost1;