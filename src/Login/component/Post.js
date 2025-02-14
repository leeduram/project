import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/-reset.css';
import '../css/Post.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import user from '../img/user.png';

const Post = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const [postData,setPostData] = useState({
		title:'',
		nickname:'',
		writeDate:''
	})

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])
	useEffect(() => {
		axios
	})

	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}

	return(
		<>
			<header className="login-header">
				<div className="logo">
					<img src={b} alt="logo"></img>
					<p>bZip</p>
				</div>
				<div className="category">
					<Link to='/home'>Home</Link>
					<Link to='/fix'>Upload</Link>
					<Link to='/board'>Community</Link>
				</div>
				<img src={user} alt="profile" onClick={handleClick}></img>
			</header>
			<main className="post-main">
				{profileOpen && <div className="profile-box">
					<img src={user}/>
					<p>{loginData.nickname}</p>
					<p>Member Since : {loginData.signupDate}</p>
					<div className="my-page">My Page</div>
					<div className="logout">
						<img src={out}></img>
						<p>Log Out</p>
					</div>
				</div>}
                <div className="container">
                    <div>
                        <div className="title">
                            <p>title</p>
                            <div className="pbox">
                                <p>nickname</p>
                                <p>2025.01.21</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br/>
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="btn">
                            <div>수정</div>
                            <div>삭제</div>
                            <div>취소</div>
                        </div>
                    </div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Post;