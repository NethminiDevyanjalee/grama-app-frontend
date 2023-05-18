import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import Help from './view/pages/Help';
import Landing from './view/pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/apply" component={Apply} />
          <Route path="/status" component={Status} />
          <Route path="/notifications" component={Notification} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
        </Switch>
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
