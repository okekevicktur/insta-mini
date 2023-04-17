import "./App.css";
import "./index.css";

import Nav from "./components/Nav.jsx";
import Bio from "./components/Bio.jsx";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Nav />
      <Bio />
      <Gallery />
    </div>
  );
}

export default App;
