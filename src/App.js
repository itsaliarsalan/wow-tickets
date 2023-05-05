import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'
import ExploreEvents from './pages/ExploreEvents'
import SingleEvent from './pages/SingleEvent'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './sections/dashboard/Overview'
import NewEvent from './sections/dashboard/NewEvent'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />}>
						<Route index element={<Overview />} />
						<Route path='new-event' element={<NewEvent />} />
					</Route>
					<Route path='/events' element={<ExploreEvents />} />
					<Route path='/event' element={<SingleEvent />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
