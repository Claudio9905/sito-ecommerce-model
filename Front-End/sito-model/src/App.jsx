import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header id="header" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer id="footer" />
    </BrowserRouter>
  );
}

export default App;
