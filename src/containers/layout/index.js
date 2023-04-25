import { useState } from "react";

import loadable from "@loadable/component";

const Header = loadable(() =>
  import("./partial/Header" /* webpackChunkName: "header"  */)
);
const Menu = loadable(() =>
  import("./partial/Menu" /* webpackChunkName: "menu"  */)
);
// const Sidebar = loadable(() =>
//   import("./partial/Sidebar" /* webpackChunkName: "sidebar"  */)
// );
// const Footer = loadable(() =>
//   import("./partial/Footer" /* webpackChunkName: "footer"  */)
// );

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
      {/* <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}

      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
