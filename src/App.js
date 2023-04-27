import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import loadable from "@loadable/component";
import loadable from "@loadable/component";

// //Component
const Layout = loadable(() => import("./containers/layout/index"));
// const Home = loadable(() => import("./containers/home/index"));
const Home = loadable(() =>
  import(/* webpackChunkName: "home" */ "./containers/home/index")
);

const Category = loadable(() => import("./containers/category/index"));

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
