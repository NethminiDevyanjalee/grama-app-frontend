import Navbar from './view/components/Navbar';
import Notification from './view/pages/Notification';
import Help from './view/pages/Help';
import Landing from './view/pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthContext } from "@asgardeo/auth-react";
import { SecureRoute } from "@asgardeo/auth-react";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute path="/home" component={Home} />
          <AuthenticatedRoute path="/apply" component={Apply} />
          <AuthenticatedRoute path="/status" component={Status} />
          <AuthenticatedRoute path="/notifications" component={Notification} />
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute path="/help" component={Help} />
        </Switch>
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
  const { signOut } = useAuthContext();
  return <button onClick={ () => signOut() }>LOGOUT</button>;
}

export default App;
