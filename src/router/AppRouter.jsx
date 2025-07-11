import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Payment from "../pages/Payment.jsx";
import Map from "../pages/Map.jsx";
import Feedback from "../pages/Feedback.jsx";
import News from "../pages/News.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/map" element={<Map />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
