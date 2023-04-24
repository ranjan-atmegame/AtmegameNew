import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component
// import Layout from "./layo";

// import Home from "./layo/Home";
// import About from "./layo/About";
// import Contact from "./layo/Contact";

import Layout from "./containers/layout";
import Home from "./containers/home";
import Category from "./containers/category";
import Sitemap from "./containers/Sitemap";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
