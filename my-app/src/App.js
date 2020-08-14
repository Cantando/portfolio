import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/pages/navtabs";
import Home from "./components/pages/home";
import AboutMe from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Technology from "./components/pages/technology";
import Resume from "./components/pages/resume";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/home" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;















