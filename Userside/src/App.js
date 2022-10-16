import HomePage from "./components/HomePage";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <HomePage />
    // </>
  );
}

export default App;
