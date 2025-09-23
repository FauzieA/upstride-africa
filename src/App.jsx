import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />

      {/* other routes */}
    </Routes>
    </>
  );
}

export default App;
