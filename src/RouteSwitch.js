import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./components/pages/contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
