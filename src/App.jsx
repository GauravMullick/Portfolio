import Intro from "./components/Intro/intro";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Topbar from "./components/topbar/topbar";
import Works from "./components/works/works";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/menu";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Topbar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
