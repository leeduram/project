import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import b from '../img/b.png'
import user from '../img/user.png'
import out from '../img/logout.png'
import ad1 from '../img/ad1.png' 
import ad2 from '../img/ad2.png' 
import ad3 from '../img/ad3.png'
import sim1 from '../img/sim1.png'
import sim2 from '../img/sim2.png'
import sim3 from '../img/sim3.png'
import rog1 from '../img/rog1.png'
import rog2 from '../img/rog2.png'
import rog3 from '../img/rog3.png'
import '../css/-reset.css'
import styles from '../css/HomeO.module.css'
import axios from "axios";

const HomeO = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const userData = () => {
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	}
	useEffect(() =>{
		userData()
	},[])

	const navi = useNavigate();
	const portal1 = () => {
		navi('/gamepost1')
	}
	const portal2 = () => {
		navi('/gamepost2')
	}

	return(
		<>
			<header className={styles.loginHeader}>
				<div className={styles.site}>
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className={styles.category}>
					<Link to='/homeo' className={styles.categoryBtn}>Home</Link>
					<Link to='/fix' className={styles.categoryBtn}>Upload</Link>
					<Link to='/board' className={styles.categoryBtn}>Community</Link>
				</div>
				<img src={user} alt="profile" className={styles.imgbtn} onClick={handleClick}></img>
			</header>
			<main>
				{profileOpen && <div className={styles.profileBox}>
					<img src={user} className={styles.profileImg}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className={styles.mypage}>My Page</div>
					<div className={styles.logout}>
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
				<div className={styles.container}>
					<div className={styles.ad}>
						<iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/A1TRiha3nLw?si=QIkGSQptMXyDjRnn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						<div className={styles.description}>
							<p>"Voices Of The Void"</p>
							<div className={styles.photo}>
								<img src={ad1} alt="ingame1"></img>
								<img src={ad2} alt="ingame2"></img>
								<img src={ad3} alt="ingame3"></img>
							</div>
							<p>#Simulation</p>
							<Link to='/gamepost2'>PLAY!</Link>
						</div>
					</div>
					<div className={styles.library}>
						<div className={styles.latest}>
							<p>Latest Featured Games</p>
							<div className={styles.game}>
								<div onClick={portal1} style={{cursor:'pointer'}}>
									<img src={rog1} alt="thumbnail"></img>
									<p>Die in the Dungeon</p>
									<p>#Roguelike</p>
									<p>A turn-based, deck-building roguelite focused on dice combinations!</p>
								</div>
								<div>
									<img src={rog2} alt="thumbnail"></img>
									<p>Solitomb</p>
									<p>#Roguelike</p>
									<p>Stack monsters into delightful combos.</p>
								</div>
								<div>
									<img src={sim1} alt="thumbnail"></img>
									<p>Ages of Conflict</p>
									<p>#Simulation</p>
									<p>Create a massive Free-For-All across multiple maps with Randomization, Statistics and History tracking</p>
								</div>
							</div>
						</div>
						<div className={styles.simulation}>
							<p>Simulation</p>
							<div className={styles.game}>
								<div>
									<img src={sim1} alt="thumbnail"></img>
									<p>Ages of Conflict</p>
									<p>#Simulation</p>
									<p>Create a massive Free-For-All across multiple maps with Randomization, Statistics and History tracking</p>
								</div>
								<div>
									<img src={sim2} alt="thumbnail"></img>
									<p>Tower Wizard</p>
									<p>#Simulation</p>
									<p>Construct the mightiest wizard tower!</p>
								</div>
								<div onClick={portal2} style={{cursor:'pointer'}}>
									<img src={sim3} alt="thumbnail"></img>
									<p>"Voices Of The Void" </p>
									<p>#Simulation</p>
									<p>Gather unknown signals from deep, silent space</p>
								</div>
							</div>
						</div>
						<div className={styles.roguelike}>
							<p>Roguelike</p>
							<div className={styles.game}>
								<div onClick={portal1} style={{cursor:'pointer'}}>
									<img src={rog1} alt="thumbnail"></img>
									<p>Die in the Dungeon</p>
									<p>#Roguelike</p>
									<p>A turn-based, deck-building roguelite focused on dice combinations!</p>
								</div>
								<div>
									<img src={rog2} alt="thumbnail"></img>
									<p>Solitomb</p>
									<p>#Roguelike</p>
									<p>Stack monsters into delightful combos.</p>
								</div>
								<div>
									<img src={rog3} alt="thumbnail"></img>
									<p>Dragonsweeper</p>
									<p>#Roguelike</p>
									<p>A roguelike minesweeper adventure</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default HomeO;