import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import loadable from "@loadable/component";

//Component
const Layout = loadable(import("./containers/layout"));
const Home = loadable(import("./containers/home"));
const Category = loadable(import("./containers/category"));

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
