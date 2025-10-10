import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Programs from "./Pages/Programs";
import ProgramDetails from "./Pages/ProgramDetails";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about" element={<About />} />
        {/* Programs & Services */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />

     

        {/* You can add more pages later like /programs or /services */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
