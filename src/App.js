import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'
import ExploreEvents from './pages/ExploreEvents'
import SingleEvent from './pages/SingleEvent'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

// Dashboard
import Dashboard from './pages/dashboard/Dashboard'
import Overview from './sections/dashboard/Overview'
import NewEvent from './sections/dashboard/add_event/NewEvent'
import BasicInfo from './sections/dashboard/add_event/BasicInfo'
import EventImages from './sections/dashboard/add_event/EventImages'
import AddTicket from './sections/dashboard/add_event/AddTicket'
import ConfirmEvent from './sections/dashboard/add_event/ConfirmEvent'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/dashboard' element={<Dashboard />}>
						<Route index element={<Overview />} />
						<Route path='new-event' element={<NewEvent />}>
							<Route index element={<BasicInfo />} />
							<Route path='step-2' element={<EventImages />} />
							<Route path='step-3' element={<AddTicket />} />
							<Route path='step-4' element={<ConfirmEvent />} />
						</Route>
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
