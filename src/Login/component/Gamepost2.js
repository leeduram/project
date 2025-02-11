import React, { useState } from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import gamepost2main from '../proimg/gamepost2main.png'
import gamepost2screen1 from '../proimg/gamepost2screen1.png'
import gamepost2screen2 from '../proimg/gamepost2screen2.png'
import gamepost2screen3 from '../proimg/gamepost2screen3.png'
import gamepost2screen4 from '../proimg/gamepost2screen4.png'
import './reset.css'
import styles from './Gamepost2.module.css'

const Gamepost2 = () => {
	const handleClick=() => {
		alert("유저 관련 툴 만들기 or figma 따라가기")
	}

	const [expand,setExpand] = useState('gamepost2screen1')
	const handleClick2 = (image) => {
		setExpand(image)
	}

	const [showInfo,setShowInfo] = useState(false)
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
					<img src={gamepost2main} alt="mainscreen"></img>
					<div className={styles.photoZone}>
						<div className={styles.screen}>
							{expand === 'gamepost2screen1' && (<img src={gamepost2screen1} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost2screen2' && (<img src={gamepost2screen2} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost2screen3' && (<img src={gamepost2screen3} alt="expand" className={styles.expand}/>)}
							{expand === 'gamepost2screen4' && (<img src={gamepost2screen4} alt="expand" className={styles.expand}/>)}
						</div>
						<div className={styles.photo}>
							<img src={gamepost2screen1} alt="screen"
							onClick={() => handleClick2('gamepost2screen1')}/>
							<img src={gamepost2screen2} alt="screen"
							onClick={() => handleClick2('gamepost2screen2')}/>
							<img src={gamepost2screen3} alt="screen"
							onClick={() => handleClick2('gamepost2screen3')}/>
							<img src={gamepost2screen4} alt="screen"
							onClick={() => handleClick2('gamepost2screen4')}/>
						</div>	
					</div>
					<div className={styles.description}>
						<div className={styles.write}>
							<div className={styles.attention}>
								<p>ATTENTION</p>
								<p>Don't post major spoilers\uncensored spoilers in the comment section. These messages will be deleted.</p>
								<p><span style={{fontWeight:'bold'}}>["Funy" comments\memes regarding the update will be deleted or banned]</span></p>
							</div>
							<div className={styles.warning}>
								<p>WARNING</p>
								<p>If you having trouble accessing to Story mode - go to tutorial, wait for Achievement pop up, go to settings, apply settings.</p>
								<p>NOTE:</p>
								<p>Since the game started to use 7z format, you gotta download the 7zip archiver.</p>
							</div>
							<div className={styles.foreword}>
								<p>Foreword</p>
								<p>This game is a "Pre-Alpha" that means it is far from perfect, but it has quite a lot of stuff to play with and to look at. It has a basic gameplay loop, plenty of different mechanics, gameplay elements, stuff to play around with etc
								You can support the game on Patreon and give it more chances to get into release state.</p>
							</div>
							<div className={styles.description2}>
								<p>Description</p>
								<p>You work as a scientist in the isolated research lab in the mountains of Switzerland. Your task is to gather signals from space, analyze them, process them and sell them to get points.</p>
								<p>You can get regular signals and objects like dwarf planets and stars, or you can get something "unusual" or even "strange" and "unexplainable".</p>
								<p>The game has 40+ days and unique events, 150+ unique signals, plenty of secrets, mysteries and easter eggs.</p>
								<p>You can report problems and give ideas\suggestions on Discord Server</p>
							</div>
							<div className={styles.faq}>
								<p>Quick FAQ</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: Will there be a multiplayer in the future?<br/>
								<span style={{fontWeight:'bold'}}>A</span>: Most likely not, due to the lack of networking experience and lack of foundation for net in the game.</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: Why game uses so much resources?<br/>
								<span style={{fontWeight:'bold'}}>A</span>: This might be caused by "Volumetric Light" setting, disable it and it should be better. Also you can lower the shadows, effects, draw distance, but setting shadows to 0 is not recommended if you want a decent picture.</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: How to use custom content (pictures, radio, tv etc)<br/>
								<span style={{fontWeight:'bold'}}>A</span>: There are entries for these in Help section in main\pause menu, but the asset folder is located at "appdata\local\votv\assets". If you can't see the folder - run your game As Administrator and it will generate the folder.</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: All my settings are at 0; Quality is super pixelated; Completely black\gray screen<br/>
								<span style={{fontWeight:'bold'}}>A</span>: Go to Settings &gt; Game and click "Regenerate data.sav" button</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: I don't understand X thing<br/>
								<span style={{fontWeight:'bold'}}>A</span>: Go to main menu/pause menu and open click "Help" button to open Help window, you can look up the issue you're having a problem with.</p>
								<p><span style={{fontWeight:'bold'}}>Q</span>: Will the game be on Steam one day?<br/>
								<span style={{fontWeight:'bold'}}>A</span>: The game will get in Steam eventually, but the game is still quite unfinished so it will take some time to polish it for Steam release.</p>
							</div>
							<div className={styles.information}>
								<span style={{color:'#006fff',
									textDecoration:'underline',
									cursor:'pointer',
									display:'inline-block'
								}} onClick={handleClick3}>More Information</span>
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

export default Gamepost2;