import React from "react";
import { Link } from "react-router-dom";
import '../css/reset.css';
import '../css/Guest.css';
import b from '../img/b.png';

const Guest = () => {

	return(
		<>
			<header className="guest-header">
				<div className="guest-logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="guest-category">
					<Link to='/fix'>Home</Link>
					<Link to='/fix'>Community</Link>
				</div>
				<div className="guest-ui">
					<Link to='/signin'>Sign In</Link>
					<Link to='/signup'>Sign Up</Link>
				</div>
			</header>
			<main></main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Guest;