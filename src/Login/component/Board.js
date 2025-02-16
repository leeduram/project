import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/-reset.css';
import '../css/Board.css';
import b from '../img/b.png';
import out from '../img/logout.png';
import search from '../img/search.png';
import user from '../img/user.png';

const Board = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const [loginData,setLoginData] = useState({
		nickname:'',
		signupDate:''
	})
	const [posts,setPosts] = useState([]);
	const [totalPosts,setTotalPosts] = useState(0);
	const [currentPage,setCurrentPage] = useState(1);
	const [limit,setLimit] = useState(10);
	const [pageBtn,setPageBtn] = useState([]);
	const [totalPage,setTotalPage] = useState(0);

	useEffect(() =>{
		axios.get('http://localhost:8080/api/info', { withCredentials: true })
		.then((resp) => {
			setLoginData(resp.data)
		})
	},[])
	useEffect(() => {
		postList(currentPage, limit)
		movePageBtn();
	},[currentPage,limit,totalPosts]);
	//글이 추가되거나 삭제됐을 때 변화하는 totalPosts에도 영향을 받아야 함
	useEffect(() => {
		// 페이지 번호가 localStorage에 있는지 확인하고, 있으면 해당 페이지로 이동
		const storedPage = localStorage.getItem('currentPage');
		if (storedPage) {
			setCurrentPage(Number(storedPage));
		} else {
			setCurrentPage(1); // 기본값은 1
		}
		
		postList(currentPage, limit);
		movePageBtn();
	}, [limit]);
	useEffect(() => {
		// currentPage가 변경될 때마다 localStorage에 현재 페이지 번호 저장
		localStorage.setItem('currentPage', currentPage);
	}, [currentPage]);

	const postList = (page, limit) => {
		axios.post('http://localhost:8080/api/page',{
			page,limit
		})
		.then((resp) => {
			setPosts(resp.data.posts);
			setTotalPosts(resp.data.totalPosts);
		})
	}
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('ko-kr');
	}
	const movePageBtn = () => {
		const totalPage = Math.ceil(totalPosts / limit)
		setTotalPage(totalPage)

		const endPage = Math.ceil(currentPage / 5) * 5;
		const startPage = endPage - 4;
		const btns = [];
		for (let i = startPage; i <= endPage && i <= totalPage; i++){
			btns.push(i);
		}
		const prevNext = () => {
				if (currentPage > 1) {
				setCurrentPage(currentPage - 1)
			}
				if (currentPage < totalPage) {
				setCurrentPage(currentPage + 1)
			}
		}

		setPageBtn(btns);
	}
	const handleClick=() => {
		setProfileOpen(!profileOpen)
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
			<main className="board-main">
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
                <div className="board-container">
                    <h1>자유 게시판</h1>
                    <div className="board-h2">
                        <p>공지사항</p>
                        <p>자유 게시판</p>
                    </div>
                    <div className="board-sub-container">
                        <div className="board-box1">
                            <div>번호</div>
                            <div>제목</div>
                            <div>작성자</div>
                            <div>작성 시간</div>
                        </div>
						{posts.map((post) => {
							return(
								<div key={post.uid} className="board-box2">
									<div>{post.uid}</div>
									<div>
										<Link to={`/post/${post.uid}`}>{post.title}</Link>
									</div>
									<div>{post.user.nickname}</div>
									<div>{formatDate(post.writeDate)}</div>
								</div>
							)
						})}
                    </div>
					<div className="board-tool-arrange">
							<Link to='/write'>글쓰기</Link>
					</div>
					<div className="board-page">
						<button className="board-move-btn" onClick={() => {
							currentPage > 1 && setCurrentPage(currentPage - 1)
						}} disabled={currentPage === 1}>&lt;</button>
						{pageBtn.map((btn) => {
							return(
								<button className={`board-move-btn ${btn === currentPage? "active" : ''}`} 
								key={btn} onClick={() => {
									setCurrentPage(btn)
								}}>{btn}</button>
							)
						})}
						<button className="board-move-btn" onClick={() => {
							currentPage < totalPage && setCurrentPage(currentPage + 1)
						}} disabled={currentPage === totalPage}>&gt;</button>
					</div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default Board;