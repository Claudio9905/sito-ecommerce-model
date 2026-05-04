import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProfileUser from "./components/ProfileUser";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Header id="header" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profileUser" element={<ProfileUser />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer id="footer" />
    </BrowserRouter>
  );
}

export default App;
