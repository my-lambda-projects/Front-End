import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './../bind-txt.css';
const UserDetails = props => {
  const {
    firstName,
    lastName,
    email,
    interests,
    state,
    telephone
  } = props.user;
  return <div>
        <div>
          I am
          {' '}
          <span className="bindtext">{firstName} {lastName}</span>
          {' '}
          and I am
          {' '}
          <span className="bindtext">above {age} years</span>
          {' '}
          and you can send your emails to
          {' '}
          <span className="bindtext">{email}</span>
          . I live in the state of
          {' '}
          <span className="bindtext">{state}</span>
          . I likes to
          {' '}
          <span className="bindtext">{interests.join(', ')}</span>
          {' '}
          and please send me the news letters. Please reach out to me on my phone
          {' '}
          <span className="bindtext">{telephone}</span>
          .
        </div>
      </div>;
};

UserDetails.propTypes = {
  user: PropTypes.object,
};

export default UserDetails;
