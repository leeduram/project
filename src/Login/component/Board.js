import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import b from '../img/b.png';
import user from '../img/user.png';
import out from '../img/logout.png'
import search from '../img/search.png';
import '../css/-reset.css'
import styles from '../css/Board.module.css'
import axios from "axios";

const AA = () => {
	const [profileOpen,setProfileOpen] = useState(false);
	const handleClick=() => {
		setProfileOpen(!profileOpen)
	}

	const [posts,setPosts] = useState([]);
	const [totalPosts,setTotalPosts] = useState(0);
	const [currentPage,setCurrentPage] = useState(1);
	const [limit,setLimit] = useState(10);
	const [pageBtn,setPageBtn] = useState([]);
	const [totalPage,setTotalPage] = useState(0);

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
						<p>Nickname</p>
						<p>Member Since : 2025.02.02</p>
						<div className={styles.mypage}>My Page</div>
						<div className={styles.logout}>
							<img src={out}></img>
							<p>Log Out</p>
						</div>
					</div>}
                <div className={styles.container}>
                    <p className={styles.h1}>자유 게시판</p>
                    <div className={styles.h2}>
                        <p>공지사항</p>
                        <p>자유 게시판</p>
                    </div>
                    <div className={styles.subcontainer}>
                        <div className={styles.box}>
                            <div className={styles.num}>번호</div>
                            <div className={styles.title}>제목</div>
                            <div className={styles.writer}>작성자</div>
                            <div className={styles.date}>작성 시간</div>
                        </div>
						{posts.map((post) => {
							return(
								<div key={post.uid} className={styles.box1}>
									<div className={styles.num}>{post.uid}</div>
									<div className={styles.dataTitle}>{post.title}</div>
									<div className={styles.writer}>{post.user.nickname}</div>
									<div className={styles.date}>{formatDate(post.writeDate)}</div>
								</div>
							)
						})}
                    </div>
					<div className={styles.searchTool}>
						<div className={styles.tool}>
							<div className={styles.search}>
								<select>
									<option>제목</option>
									<option>닉네임</option>
								</select>
								<form className={styles.input}>
									<input></input>
									<button type="button" className={styles.searchbtn}>
										<img src={search}/>
									</button>
								</form>
							</div>
							<div className={styles.writebtn}>글쓰기</div>
						</div>
					</div>
					<div className={styles.page}>
						<button className={styles.moveBtn} onClick={() => {
							currentPage > 1 && setCurrentPage(currentPage - 1)
						}} disabled={currentPage === 1}>&lt;</button>
						{pageBtn.map((btn) => {
							return(
								<button className={`${styles.moveBtn} ${btn === currentPage? styles.active : ''}`} 
								key={btn} onClick={() => {
									setCurrentPage(btn)
								}}>{btn}</button>
							)
						})}
						<button className={styles.moveBtn} onClick={() => {
							currentPage < totalPage && setCurrentPage(currentPage + 1)
						}} disabled={currentPage === totalPage}>&gt;</button>
					</div>
                </div>
            </main>
			<footer>Copyright © 2025 bZip</footer>
		</>
	)
}

export default AA;