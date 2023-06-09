import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CostaExp from "./pages/CostaExp";
import Home from "./pages/Home";
import Destination from "./pages/Destinations";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CostaExp" element={<CostaExp />} />
        <Route path="/Destination" element={<Destination />} />
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
