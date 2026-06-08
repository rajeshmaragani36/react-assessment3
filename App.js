import { HashRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import ComponentsDemo from "./components/ComponentsDemo";
import PropsDemo from "./components/PropsDemo";
import StateDemo from "./components/StateDemo";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/components">Components</Link>
          <Link to="/props">Props</Link>
          <Link to="/state">State</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<ComponentsDemo />} />
            <Route path="/props" element={<PropsDemo />} />
            <Route path="/state" element={<StateDemo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;