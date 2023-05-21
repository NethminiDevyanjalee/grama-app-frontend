import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/pages/Home";
import Application from "./view/pages/Application";
import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import UserProfileDetails from './view/pages/UserProfileDetails'
import Help from './view/pages/Help';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/status" element={<Status />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<UserProfileDetails />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

function Status() {
  return <h1>Contact us</h1>;
}

export default App;
