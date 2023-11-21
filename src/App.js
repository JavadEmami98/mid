import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import DigiPay from "./page/DigiPay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/digipay" element={<DigiPay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
