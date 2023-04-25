import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import loadable from "@loadable/component";
import { lazy } from "@loadable/component";

// //Component
const Layout = lazy(() => import("./containers/layout/index"));
const Home = lazy(() => import("./containers/home/index"));
const Category = lazy(() => import("./containers/category/index"));

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
