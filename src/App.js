import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './Login/component/Board';
import Home from './Login/component/Home';
import Write from './Login/component/Write';
import Mainpage from './Logout/component/Mainpage';
import Signin from './Logout/component/SigIn';
import Signup from './Logout/component/SignUp';
import Post from './Login/component/Post';
import Modify from './Login/component/Modify';

//header, main, footer
import Guest from './Logout/component/Guest';
import User from './Login/component/User';

function App() {
	
	return(
	<>
		<Routes>
			<Route path='/aa' element={<Guest/>}/>
			<Route path='/bb' element={<User/>}/>
			<Route path='/' element={<Mainpage/>}/>
			<Route path='/signup' element={<Signup/>}/>
			<Route path='/signin' element={<Signin/>}/>
			<Route path='/home' element={<Home/>}/>
			<Route path='/board' element={<Board/>}/>
			<Route path='/write' element={<Write/>}/>
			<Route path='/post/:uid' element={<Post/>}/>
			<Route path='/modify/:uid' element={<Modify/>}/>
		</Routes>
	</>
	)
}

export default App;