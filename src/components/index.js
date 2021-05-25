import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './SignUp';


function App () {
  return (
    <div className="App">
      <h1>Forms with React Hooks</h1>
      <Form />
    </div>

  );
}
const root=document.getElementById("root")

ReactDOM.render (<App />, rootElement);

