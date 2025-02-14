import React from "react"
import { Link } from "react-router-dom"
import '../css/-reset.css'
import '../css/Mainpage.css'
import b from '../img/b.png'
import man from '../img/man.jpg'

const Mainpage = () => {

	return(
		<>
			<header className="header">
				<div className="logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="category">
					<Link to='/fix'>Home</Link>
					<Link to='/fix'>Community</Link>
				</div>
				<div className="ui">
					<Link to='/signin'>Sign In</Link>
					<Link to='/signup'>Sign Up</Link>
				</div>
			</header>
			<main className="mainpage-main">
				<div>
					<h1>Show off your talent</h1>
					<div className="content">
						<div className="text">
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