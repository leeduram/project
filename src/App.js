import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Logout/component/Mainpage';
import Signup from './Logout/component/SignUp';
import Signin from './Logout/component/SigIn';
import HomeO from './Login/component/HomeO';
import HomeX from './Logout/component/HomeX';
import AA from './Login/component/AA'

function App() {
	
	return(
	<>
		<Routes>
			<Route path='/' element={<Mainpage/>}></Route>
			<Route path='/signup' element={<Signup/>}></Route>
			<Route path='/signin' element={<Signin/>}></Route>
			<Route path='/homeo' element={<HomeO/>}></Route>
			<Route path='/homex' element={<HomeX/>}></Route>
			<Route path='/aa' element={<AA/>}/>
		</Routes>
	</>
	)
}

export default App;