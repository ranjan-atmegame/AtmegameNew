import { useState } from "react";

import loadable from "@loadable/component";

const Header = loadable(() => import("./partial/Header"));
const Menu = loadable(() => import("./partial/Menu"));
const Sidebar = loadable(() => import("./partial/Sidebar"));
const Footer = loadable(() => import("./partial/Footer"));

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
