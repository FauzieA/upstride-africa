import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
