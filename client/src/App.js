import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Pages
import Header from "./sections/layout/Header"
import Footer from "./sections/layout/Footer"
import Home from "./pages/Home"
import ExploreEvents from "./pages/ExploreEvents"
import SingleEvent from "./pages/SingleEvent"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import CustomerSupport from "./pages/auth/CustomerSupport"

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard"
import Overview from "./sections/dashboard/Overview"
import AddEvent from "./pages/dashboard/events/AddEvent"
import ManageEvents from "./pages/dashboard/events/ManageEvents"
import Audience from "./pages/dashboard/Audience"
import Organizers from "./pages/dashboard/Organizers"
import Orders from "./pages/dashboard/Orders"
import Payments from "./pages/dashboard/Payments"
import OrderComplete from "./pages/dashboard/OrderComplete"
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
import Profile from "./pages/user/Profile"
import PrivacyPolicy from "./pages/extra/PrivacyPolicy"
import SellerInfo from "./pages/auth/SellerInfo"
import Terms from "./pages/auth/Terms"
import Stripe from "./pages/auth/Stripe"
import "@stripe/stripe-js"
import StripeContainer from "./pages/StripeContainer"
import ResetPassword from "./pages/auth/ResetPassword"
function App() {
	// Make sure to call `loadStripe` outside of a component’s render to avoid
	// recreating the `Stripe` object on every render.

	const userSignin = useSelector(state => state.userSignin)
	const { userInfo } = userSignin
	return (
		// Using component as a wrapper to provide contextAPI's for reducing complexity of the code
		<AppWrapper>
			<main>
				<Routes>
					{/* Routes with header and footer */}
					<Route
						path="/"
						element={
							<>
								<Header />
								<Outlet />
								<Footer />
							</>
						}
					>
						{/* Home Page Route */}
						<Route path="/checkout" element={<StripeContainer />} />
						<Route path="/events" element={<ExploreEvents />} />
						<Route path="/events/:id" exact element={<SingleEvent />}></Route>
						<Route path="/order/success" element={<OrderComplete />} />
						<Route path="/stripe-onboarding/fail" element={<StripeFailed />} />
						<Route index element={<Home />} />
						{/* Home page routes end */}

						{/* Dashboard */}
						{userInfo && (
							<Route path="/dashboard" element={<Dashboard />}>
								<Route index element={<Overview />} />
								<Route path="events/add" element={<AddEvent />} />
								<Route path="events/manage" element={<ManageEvents />} />
								<Route path="tickets/add" element={<AddTicket />} />
								<Route path="tickets/manage" element={<ManageTickets />} />
								<Route path="orders/sell" element={<SellOrders />} />
								<Route path="orders/purchase" element={<PurchaseOrders />} />
								<Route path="users" element={<ManageUsers />} />
								<Route path="audience" element={<Audience />} />
								<Route path="organizers" element={<Organizers />} />
								<Route path="orders" element={<Orders />} />
								<Route path="payments" element={<Payments />} />
								<Route path="venues/add" element={<AddVenue />} />
								<Route path="venues/manage" element={<ManageVenues />} />
								<Route path="profile" element={<Profile />} />
							</Route>
						)}
						{/* End */}
					</Route>

					{/* Routes without header and footer */}
					<Route path="/signin" element={<Login />} />
					<Route path="/seller-info" element={<SellerInfo />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/seller-onboard" element={<Stripe />} />
					<Route path="/seller-signup" element={<Register isSeller={true} />} />
					<Route path="/customer-support" element={<CustomerSupport />} />
					<Route path="/buyer-signup" element={<Register isSeller={false} />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</main>

			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</AppWrapper>
	)
}

export default App
