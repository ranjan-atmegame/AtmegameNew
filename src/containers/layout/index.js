import { useState } from "react";

import Header from "./partial/Header";
import Menu from "./partial/Menu";
import Sidebar from "./partial/Sidebar";
import Footer from "./partial/Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(() => {
      return !isSidebarOpen;
    });
  };

  return (
    <div className="wrapper">
      <Header toggleSidebar={toggleSidebar} />
      <Menu />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
