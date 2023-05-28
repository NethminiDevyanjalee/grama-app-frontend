import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from "./view/pages/Home";
import Application from "./view/pages/Application";
import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import UserProfileDetails from './view/pages/UserProfileDetails'
import Help from './view/pages/Help';
import Landing from './view/pages/Landing';
import { useAuthContext } from "@asgardeo/auth-react";
import { SecureRoute } from "@asgardeo/auth-react";
import StatusCheck from "./view/pages/StatusCheck";
import AdminPanel from './view/pages/AdminPanel';
import CopyrightView from "./view/components/CopyrightView";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute path="/home" component={Home} />
          <AuthenticatedRoute path="/apply" component={Application} />
          <AuthenticatedRoute path="/status" component={StatusCheck} />
          <AuthenticatedRoute path="/notifications" component={Notification} />
          <AuthenticatedRoute path="/profile" component={UserProfileDetails} />
          <AuthenticatedRoute path="/help" component={Help} />
          <AuthenticatedRoute path="/admin" component={AdminPanel} />
        </Switch>
        <CopyrightView />
      </div>
    </Router>
  );
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { signIn } = useAuthContext();

  return (
    <SecureRoute
      {...rest}
      component={Component}
      callback={() => {
        signIn();
      }}
    />
  );
};

export default App;
