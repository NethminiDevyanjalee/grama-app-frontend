import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import Help from './view/pages/Help';
import Landing from './view/pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/status" element={<Status />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the home page!</h1>;
}

function Apply() {
  return <h1>About us</h1>;
}

function Status() {
  return <h1>Contact us</h1>;
}

function Profile() {
  return <h1>User Profile</h1>;
}

export default App;
