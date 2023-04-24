import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
// import Layout from "./layout";

import Home from "./layout/Home";
import Header from "./layout/Header";
import About from "./layout/About";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
}

export default App;
