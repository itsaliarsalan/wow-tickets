import React from "react"
import { Routes, Route } from "react-router-dom"

// Pages
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Home from "./pages/Home"
import ExploreEvents from "./pages/ExploreEvents"
import SingleEvent from "./pages/SingleEvent"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard"
import Overview from "./sections/dashboard/Overview"
import AddEvent from "./pages/dashboard/events/AddEvent"
import ManageEvents from "./pages/dashboard/events/ManageEvents"
import Audience from "./pages/dashboard/Audience"
import Organizers from "./pages/dashboard/Organizers"
import Orders from "./pages/dashboard/Orders"
import Payments from "./pages/dashboard/Payments"
import PaymentSuccess from "./pages/dashboard/PaymentSuccess"
import StripeFailed from "./pages/dashboard/StripeFailed"
import { useSelector } from "react-redux"
import AddVenue from "./pages/dashboard/venues/AddVenue"
import ManageVenues from "./pages/dashboard/venues/ManageVenues"
import AppWrapper from "./components/layout/AppWrapper"
import AddTicket from "./pages/dashboard/events/AddTicket"
import ManageTickets from "./pages/dashboard/events/ManageTickets"
import SellOrders from "./pages/dashboard/orders/SellOrders"
import PurchaseOrders from "./pages/dashboard/orders/PurchaseOrders"
import ManageUsers from "./pages/dashboard/users/ManageUsers"
import Checkout from "./pages/Checkout"

function App() {
	const userSignin = useSelector(state => state.userSignin)
	const { userInfo } = userSignin

	return (
    // Using component as a wrapper to provide contextAPI's for reducing complexity of the code
    <AppWrapper>
      <Header />
      <main>
        <Routes>
          {/* Dashboard */}
          {true && (
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path='events/add' element={<AddEvent />} />
              <Route path='events/manage' element={<ManageEvents />} />
              <Route path='tickets/add' element={<AddTicket />} />
              <Route path='tickets/manage' element={<ManageTickets />} />
              <Route path='orders/sell' element={<SellOrders />} />
              <Route path='orders/purchase' element={<PurchaseOrders />} />
              <Route path='users' element={<ManageUsers />} />
              <Route path='audience' element={<Audience />} />
              <Route path='organizers' element={<Organizers />} />
              <Route path='orders' element={<Orders />} />
              <Route path='payments' element={<Payments />}>
                <Route path='/success' element={<PaymentSuccess />} />
                <Route path='/fail' element={<StripeFailed />} />
              </Route>

              <Route path='venues/add' element={<AddVenue />} />
              <Route path='venues/manage' element={<ManageVenues />} />
            </Route>
          )}
          {/* End */}

					{/* Home Page Route */}
					<Route path="/events" element={<ExploreEvents />} />
					<Route path="/events/:id" exact element={<SingleEvent />}></Route>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route index element={<Home />} />
					{/* End */}
				</Routes>
			</main>
			<Footer />
		</AppWrapper>
	)
}

export default App
