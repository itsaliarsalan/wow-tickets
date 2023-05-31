import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Localization for datepicker
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

// Pages
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Home from "./pages/Home"
import ExploreEvents from "./pages/ExploreEvents"
import SingleEvent from "./pages/SingleEvent"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import AdminRoute from "./components/AdminRoute"
import PrivateRoute from "./components/PrivateRoute"

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard"
import Overview from "./sections/dashboard/Overview"
import NewEvent from "./pages/dashboard/NewEvent"
import BasicInfo from "./sections/dashboard/add_event/BasicInfo"
import EventImages from "./sections/dashboard/add_event/EventImages"
import AddTicket from "./sections/dashboard/add_event/AddTicket"
import ConfirmEvent from "./sections/dashboard/add_event/ConfirmEvent"
import ManageEvents from "./pages/dashboard/ManageEvents"
import ScrollToTop from "./utilities/ScrollToTop"
import EventCategories from "./pages/dashboard/ManageCategories"
import Audience from "./pages/dashboard/Audience"
import Venues from "./pages/dashboard/Venues"
import Organizers from "./pages/dashboard/Organizers"
import Orders from "./pages/dashboard/Orders"
import Payments from "./pages/dashboard/Payments"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path='/events' element={<ExploreEvents />} />
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
              <Route path='payments' element={<Payments />} />
            </Route>
            {/* End */}

            {/* Home Page Route */}
            <Route path='/event/:id' element={<SingleEvent />}></Route>
            <Route index element={<Home />} />
            {/* End */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LocalizationProvider>
  )
}

export default App
