import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Logout/component/Mainpage';
import Signup from './Logout/component/SignUp';
import Signin from './Logout/component/SigIn';
import HomeO from './Login/component/HomeO';
import Board from './Login/component/Board';
import Write from './Login/component/Write';

function App() {
	
	return(
	<>
		<Routes>
			<Route path='/' element={<Mainpage/>}/>
			<Route path='/signup' element={<Signup/>}/>
			<Route path='/signin' element={<Signin/>}/>
			<Route path='/homeo' element={<HomeO/>}/>
			<Route path='/board' element={<Board/>}/>
			<Route path='/write' element={<Write/>}/>
		</Routes>
	</>
	)
}

export default App;