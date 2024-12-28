import "./App.css";
import Navigation from "./Navigation";
import Hobbies from "./pages/Hobbies";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
