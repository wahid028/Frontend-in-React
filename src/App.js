import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Service from "./components/Service";
import Header from "./components/Header";
import Index from "./components/Index";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Potfolio from "./components/Potfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/index.html" element={<Index />}></Route>
          <Route exact path="/about.html" element={<About />}></Route>
          <Route exact path="/team.html" element={<Team />}></Route>
          <Route
            exact
            path="/testimonials.html"
            element={<Testimonial />}
          ></Route>
          <Route exact path="/services.html" element={<Service />}></Route>
          <Route exact path="/portfolio.html" element={<Potfolio />}></Route>
          <Route exact path="/pricing.html" element={<Pricing />}></Route>
          <Route exact path="/blog.html" element={<Blog />}></Route>
          <Route exact path="/contact.html" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
