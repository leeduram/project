import React from "react";
import { Link } from "react-router-dom";
import b from '../proimg/b.png';
import user from '../proimg/user.png';
import './reset.css'
import styles from './Post.module.css'

const Post = () => {
	const handleClick=() => {
		alert("유저 관련 툴 만들기 or figma 따라가기")
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
                    <div className={styles.post}>
                        <div className={styles.title}>
                            <p>제목입니다</p>
                            <div className={styles.pbox}>
                                <p>유저</p>
                                <p>2025.01.21</p>
                            </div>
                        </div>
                        <div className={styles.desc}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, <br/>
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className={styles.bar}>
                        <div className={styles.btn}>
                            <div>수정</div>
                            <div>삭제</div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Post;