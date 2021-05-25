import React, {useState, useRef} from 'react';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
const SignUp = props => {
  const [credentials, setCredentials] = useState ({
    username: '',
    password: '',
    name: '',
  });

  const handleChange = useCallback (() => {
    setCredentials ({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  });
  const signUp = useCallback (() => {
    event.preventDefault ();
    const URL = 'https://ft-potluck-planner-5.herokuapp.com/api/auth/login';
    props.signUp (URL, credentials);
    props.history.push ('/redirect');
  });

  if (props.error !== null) {
    return (
      <h1>
        Could not establish a connection... please try again or contact us at
        webdevresourcehub@gmail.com
      </h1>
    );
  }

  return (
    <section className="loginSection">
      <a href="https://ft-potluck-planner-5.herokuapp.com/api/auth/login">
        <button className="homeButton">Home</button>
      </a>
      <div className="loginContainer">
        <form onSubmit={signUp} className="loginForm">
          <h2 className="loginTitle">Potluck Planner</h2>
          <input
            className="loginInput"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="loginInput"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="loginInput"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button className="loginButton">
            {props.registering
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
};

const mapStateToProps = state => ({
  error: state.signUpReducer.error,
  registering: state.signUpReducer.registering,
});

export default connect (mapStateToProps, {signUp}) (SignUp);
