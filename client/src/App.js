import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";
import SingleEvent from "./pages/SingleEvent";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<ExploreEvents />} />
          <Route path="/event" element={<SingleEvent />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
