import React, {useState} from 'react';
import  '../Styles/signup.css'
import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { useHistory } from 'react-router';
import axios from 'axios'


const Login= (props) => {
  const [formData, setFormData] = useState ({
    username: 'Admin',
    password: '1234',
  });
  const { push } = useHistory();
  const { isLoggedIn } = props;

  const updateFormData = event =>
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const {username, password} = formData;

  //sree
//   const loginUser = (loginCreds) =>  {

//     axios
//       .post('https://ft-potluck-planner-5.herokuapp.com/api/auth/login', loginCreds)
//       .then((res) => {
//         // console.log("Login return:",res.data)
//       })
//       .catch((err) => {
//        console.log(err);
//       });
//   };//
  
  //sree

  const onSubmit = (evt) => {
    evt.preventDefault();
    // console.log("FormData:",formData);
    const loginCreds = {
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    // console.log("LoginCreds:",loginCreds);
      props.loginUser(loginCreds);
      push("/events");
    //  loginUser(loginCreds);
  };

  return (
    <form>
      <input
        value={username}
        onChange={e => updateFormData (e)}
        placeholder="User name"
        type="text"
        name="username"
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
      <button onClick = {onSubmit} type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { loginUser })(Login);
// export default (Login);
