import "./App.css";
import Authentication from "./components/Auth/authPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import ConverterForm from "./components/CurrencyConverter/converterForm";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./components/Auth/signUp";
import ForgotPasswordForm from "./components/Auth/fogotPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/convert" element={<ConverterForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
