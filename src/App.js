import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CostaExp from "./pages/CostaExp";
import Home from "./pages/Home";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CostaExp" element={<CostaExp />} />
          {/* <CostaExp />
        </Route> */}
        <Route exact path="/" element={<Home />} />
        {/* <Home />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
