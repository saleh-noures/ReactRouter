import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Seller from "./Seller";
import Login from "./Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:msgToAbout" element={<About />} />
        <Route path="/seller" element={<Seller/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
