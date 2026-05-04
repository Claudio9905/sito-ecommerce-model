import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header id="header" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

      <Footer id="footer" />
    </BrowserRouter>
  );
}

export default App;
