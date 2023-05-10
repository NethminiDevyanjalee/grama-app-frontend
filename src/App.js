import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/pages/Home";
import Application from "./view/pages/Application";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/application" element={<Application />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
