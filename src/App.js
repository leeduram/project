import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './Login/component/Board';
import Home from './Login/component/Home';
import Write from './Login/component/Write';
import Mainpage from './Logout/component/Mainpage';
import Signin from './Logout/component/SigIn';
import Signup from './Logout/component/SignUp';

//header, main, footer
import HeaderFooter from './Login/component/HeaderFooter';
import ExceptionMain from './Logout/component/ExceptionMain';

function App() {
	
	return(
	<>
		<Routes>
			<Route path='/aa' element={<HeaderFooter/>}/>
			<Route path='/bb' element={<ExceptionMain/>}/>
			<Route path='/' element={<Mainpage/>}/>
			<Route path='/signup' element={<Signup/>}/>
			<Route path='/signin' element={<Signin/>}/>
			<Route path='/home' element={<Home/>}/>
			<Route path='/board' element={<Board/>}/>
			<Route path='/write' element={<Write/>}/>

		</Routes>
	</>
	)
}

export default App;