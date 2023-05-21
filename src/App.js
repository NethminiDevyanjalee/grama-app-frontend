import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./view/pages/Home";
import Application from "./view/pages/Application";
import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import UserProfileDetails from './view/pages/UserProfileDetails'
import Help from './view/pages/Help';
import Landing from './view/pages/Landing';
import StatusCheck from "./view/pages/StatusCheck";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<Application />} />
          <Route path="/status" element={<StatusCheck />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<UserProfileDetails />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
