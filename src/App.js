import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import TrucksPage from "./pages/TrucksPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AdminLoginPage />}></Route>
          <Route exact path="/dashboard" element={<AdminDashboard />}></Route>
          <Route exact path="/register" element={<AdminRegisterPage />}></Route>
          <Route exact path="/trucks" element={<TrucksPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
