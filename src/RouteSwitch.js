import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Contact from "./components/pages/contact";
import Footer from "./components/footer";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
