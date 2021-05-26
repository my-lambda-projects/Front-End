import './App.css';
import {  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import Form from './components/Signup'
// import Registration from './components/Registration'
import Invite from './components/Invite'
import Home from './components/Home';
function App() {


  return (
    <>
    <div className="App">
    <h1>Welcome to Potluck-planner</h1>
    </div>
    <Router>
        <Switch>
          <Route path="/Home" component={Home} />;

      <PrivateRoute exact path="/protected" component={Invite}/>
      <Route path="/login" component={Form} />
      {/* <Route path="/Registration" component={Registration} /> */}
    </Switch>
    </Router>
    </>
  );
}

export default App;
