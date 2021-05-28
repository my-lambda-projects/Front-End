import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
// import Login from './components/Login'
import Login from "./components/Login";
import EventsList from "./components/EventsList";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/AddEvent";

function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome to Potluck-planner</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/events/edit/:userId" component={EditEvent} />
          <Route path="/events/add" component={AddEvent} />
          <Route path="/events" component={EventsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
