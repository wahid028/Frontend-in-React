import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Service from "./components/Service";
import Header from "./components/Header";
import Index from "./components/Index";

function App() {
  return (
    <>
      <Header />
      {/* <About />
      <Service />
      <Blog /> */}
      <Router>
        <Routes>
          <Route exact path="/index.html" element={<Index />}></Route>
          <Route exact path="/about.html" element={<About />}></Route>
          <Route exact path="/services.html" element={<Service />}></Route>
          <Route exact path="/blog.html" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
