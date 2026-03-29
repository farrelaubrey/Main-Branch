import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataDiriJillsya from "./pages/DataDiriJillsya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jillsya" element={<DataDiriJillsya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;