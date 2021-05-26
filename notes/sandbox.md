<!-- # Sign Up as Class Component:
```jsx

import React from 'react';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
      name: '',
    },
  };

  handleChange = event => {
    this.setState ({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  signUp = event => {
    event.preventDefault ();
    const URL = 'https://potlucker-planner.herokuapp.com/users/register';
    this.props.signUp (URL, this.state.credentials);
    this.props.history.push ('/redirect');
  };

  render () {
    if (this.props.error !== null) {
      return <h1>Oops! Something went wrong, please try again.</h1>;
    }
    return (
      <section className="loginSection">
        <a href="https://potluck-planner.netlify.com/index.html">
          <button className="homeButton">Home</button>
        </a>
        <div className="loginContainer">
          <form onSubmit={this.signUp} className="loginForm">
            <h2 className="loginTitle">Potluck Planner</h2>
            <input
              className="loginInput"
              type="text"
              name="name"
              value={this.state.credentials.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              className="loginInput"
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              className="loginInput"
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="Password"
            />

            <button className="loginButton">
              {this.props.registering
                ? <Loader
                    type="ThreeDots"
                    color="#1f2a38"
                    height="12"
                    width="26"
                  />
                : 'Sign Up'}
            </button>
          </form>
          Already have an account?{' '}
          <Link to="/login" className="signUpLink">
            Login In
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signUpReducer.error,
  registering: state.signUpReducer.registering,
});

export default connect (mapStateToProps, {signUp}) (SignUp);




``` -->





dependencies:



```json
{
  
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "axios": "^0.21.1",
        "bootstrap": "^5.0.1",
        "classnames": "^2.3.1",
        "jsonwebtoken": "^8.5.1",
        "moment": "^2.29.1",
        "prop-types": "^15.7.2",
        "react": "^17.0.2",
        "react-context-toolbox": "^2.0.2",
        "react-dom": "^17.0.2",
        "react-loader-spinner": "^4.0.0",
        "react-moment": "^1.1.1",
        "react-redux": "^7.2.4",
        "react-router-dom": "^5.2.0",
        "react-scripts": "^4.0.3",
        "redux": "^4.0.1",
        "redux-logger": "^3.0.6",
        "redux-thunk": "^2.3.0",
        "styled-components": "^5.3.0",
        "web-vitals": "^1.0.1"
  }
}



```




import React, {useState} from 'react';
const Form = () => {
  const [formData, setFormData] = useState ({
    userName: '',
    password: '',
  });
  const updateFormData = event =>
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const { userName, password } = formData;
  
  const onSubmit = evt => {
  evt.preventDefault ();
  // console.log("FormData:",formData);
  const loginCreds = {
    username: formData.username.trim (),
    password: formData.password.trim (),
  };
  // console.log("LoginCreds:",loginCreds);
  // props.loginUser (loginCreds);
};

  
  
  
  
  return (
    <form>
      <input
        value={userName}
        onChange={e => updateFormData (e)}
        placeholder="User Name"
        type="text"
        name="userName"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData (e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button onClick={onSubmit} type="submit">Submit</button>
    </form>
  );
};
export default Form;
