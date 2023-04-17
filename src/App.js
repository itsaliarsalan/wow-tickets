import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<ExploreEvents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
