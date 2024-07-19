import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Flight from "./components/Flight";


function App() {
  return (
    <>
      <div className="w-[90%] mx-auto ">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flight" element={<Flight />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
