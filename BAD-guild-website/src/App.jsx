import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import GuideList from "./pages/GuideList";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guides" element={<GuideList />} />
        </Routes>
      </Layout>
    </Router>
  );
}
