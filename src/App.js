import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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

  const { isAuthenticated, getBasicUserInfo } = useAuthContext();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const checkIfAdmin = async () => {
        try {
            if (isAuthenticated) {
            const userInfo = await getBasicUserInfo();
            if (userInfo.groups && Array.isArray(userInfo.groups)) {
                setAdmin(userInfo.groups.some(item => item === "Grama_Niladari"));
            }
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
        };
        
  checkIfAdmin();
  }, [isAuthenticated, getBasicUserInfo]);

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
          <AdminAuthenticatedRoute path="/admin" component={AdminPanel} isAdmin={isAdmin} />
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

const AdminAuthenticatedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const { signIn } = useAuthContext();
  return (
    isAdmin ? (
      <SecureRoute
      {...rest}
      component={Component}
      callback={() => {
        signIn();
      }}
    />
    ) : (
      <Redirect to="/" />
    )
  );
};

export default App;
