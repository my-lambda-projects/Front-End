import React, { useState } from 'react';
import '../Styles/signup.css';
import * as yup from 'yup';



  const Signup = () => {
  const [formData, setFormData] = useState ({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  });
  const updateFormData = event =>
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const {firstName, lastName, userName, password} = formData;
  return (
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData (e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData (e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      
      <input
        value={userName}
        onChange={e => updateFormData (e)}
        placeholder="user Name "
        type="userName"
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;

