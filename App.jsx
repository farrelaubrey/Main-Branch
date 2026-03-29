import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Farrel from "./pages/Farrel";
import Jillsya from "./pages/Jillsya";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farrel" element={<Farrel />} />
        <Route path="/jillsya" element={<Jillsya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;