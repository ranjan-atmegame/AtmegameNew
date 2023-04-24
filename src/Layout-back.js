import loadable from "@loadable/component";

const Header = loadable(() => import("./containers/layout/header"));
// const Sidebar = loadable(() => import("./Sidebar"));
const Footer = loadable(() => import("./containers/layout/footer/index"));
// const Dynamic = loadable((p) => import(`./${p.name}`), {
//   cacheKey: (p) => p.name,
// });

function Layout({ children }) {
  console.log("Layout");

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
