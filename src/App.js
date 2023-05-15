import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Localization for datepickers
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// Pages
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
import NewEvent from './pages/dashboard/NewEvent'
import BasicInfo from './sections/dashboard/add_event/BasicInfo'
import EventImages from './sections/dashboard/add_event/EventImages'
import AddTicket from './sections/dashboard/add_event/AddTicket'
import ConfirmEvent from './sections/dashboard/add_event/ConfirmEvent'
import ManageEvents from './pages/dashboard/ManageEvents'
import ScrollToTop from './utilities/ScrollToTop'
import EventCategories from './pages/dashboard/ManageCategories'
import Audience from './pages/dashboard/Audience'
import Venues from './pages/dashboard/Venues'

// Fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Organizers from './pages/dashboard/Organizers'
import Orders from './pages/dashboard/Orders'

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<React.StrictMode>
				<BrowserRouter>
					<ScrollToTop />
					<Header />
					<Routes>
						<Route index element={<Home />} />
						<Route path='/events' element={<ExploreEvents />} />
						<Route path='/event' element={<SingleEvent />} />
						<Route path='/signin' element={<Signin />} />
						<Route path='/signup' element={<Signup />} />

						{/* Dashboard */}
						<Route path='/dashboard' element={<Dashboard />}>
							<Route index element={<Overview />} />
							<Route path='new-event' element={<NewEvent />}>
								<Route index element={<BasicInfo />} />
								<Route path='step-2' element={<EventImages />} />
								<Route path='step-3' element={<AddTicket />} />
								<Route path='step-4' element={<ConfirmEvent />} />
							</Route>
							<Route path='manage-events' element={<ManageEvents />} />
							<Route path='manage-categories' element={<EventCategories />} />
							<Route path='audience' element={<Audience />} />
							<Route path='venues' element={<Venues />} />
							<Route path='organizers' element={<Organizers />} />
							<Route path='orders' element={<Orders />} />
						</Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</React.StrictMode>
		</LocalizationProvider>
	)
}

export default App
