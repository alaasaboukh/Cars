import "./App.scss";
import LandingPage from "./components/landingPage/LandingPage";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/menu";
import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/contact";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <Topbar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <div className="sections" onClick={() => setMenu(false)}>
        <LandingPage />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
