import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverRegister from "./components/DriverRegister";
import RtoHeadRegister from "./components/RtoHeadRegister";
import LoginRto from "./components/LoginRto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRto />} />
        <Route path="/rtoheadregister" element={<RtoHeadRegister />} />
        <Route path="/driverregister" element={<DriverRegister />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
