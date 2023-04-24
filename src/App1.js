import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import loadable from "@loadable/component";

//Layout component
// import Header from "./containers/layout/header";
// import Sidebar from "./containers/layout/sidebar";

// const Sidebar = loadable(() => import("./containers/layout/sidebar"));

// import MainMenu from "./containers/layout/menu";
// import Footer from "./containers/layout/footer";

//Component
import Home from "./containers/home";
import Category from "./containers/category";
import Sitemap from "./containers/Sitemap";

//lodable component
const Header = loadable(() => import("./containers/layout/header"));
const Sidebar = loadable(() => import("./containers/layout/sidebar"));
const MainMenu = loadable(() => import("./containers/layout/menu"));
const Footer = loadable(() => import("./containers/layout/footer"));

function App() {
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    const show = sidebarRef.current.classList.contains("show") ? true : false;

    if (!show) {
      sidebarRef.current.classList.remove("hide");
      sidebarRef.current.classList.toggle("show");

      sidebarRef.current.style.width = "100%";
      sidebarRef.current.style.transition = "width 0.5s";
    } else {
      sidebarRef.current.classList.remove("show");
      sidebarRef.current.classList.toggle("hide");

      sidebarRef.current.style.width = "0px";
      sidebarRef.current.style.transition = "width 0.5s";
    }

    console.log({ show });
    console.log(sidebarRef.current.classList);
  };

  return (
    <BrowserRouter>
      <Header toggleSidebar={toggleSidebar} />
      <MainMenu />
      <Sidebar sidebarRef={sidebarRef} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
