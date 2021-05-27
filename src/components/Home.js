import React from 'react';
import {useHistory} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const styling = {
  marginLeft: 'auto',
  marginRight: '0',
  textAlign: 'right',
  display: 'flex',
  justifyContent: 'space-between',
  width: '500px',
};

export default function Home () {
  let history = useHistory ();
  return (
    <div style={styling}>
      <NavLink to="https://potluck-planner-landing.netlify.app">Home</NavLink>
      <NavLink to="./Signup">Signup</NavLink>
      <span>Already have an Account?<NavLink to="/login">Log In</NavLink></span>
    </div>
  );
}
