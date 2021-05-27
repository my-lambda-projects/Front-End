import './App.css';
import {  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
// import Login from './components/Login'
import Login from './components/Login'
import EventsList from './components/EventsList'

function App() {


  return (
    <>
    <div className="App">
    <h1>Welcome to Potluck-planner</h1>
    </div>
    <Router>
    <Switch>
      <Route exact path="/events" component={EventsList}/>
      <Route path="/login" component={Login} />
      {/* <Route path="/Registration" component={Form} /> */}
    </Switch>
    </Router>
    </>
  );
}

export default App;
