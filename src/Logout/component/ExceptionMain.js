import React from "react";
import { Link } from "react-router-dom";
import b from '../img/b.png';
import '../css/-reset.css'
import '../css/ExceptionMain.css'

const ExceptionMain = () => {

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
			<main></main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default ExceptionMain;