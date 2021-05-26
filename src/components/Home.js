import React, {useState, useEffect} from 'react';

export default function Home () {
  const [token, setToken] = useState (localStorage.getItem ('token'));
  return (
    <div>
      {token && <section className="Guest" />}
      {!token &&
        <div>
          <h1>Potluck Planner</h1>
          <h3>
            <p> Username: Admin </p>
            <p> Password: 1234</p>
            {' '}
          </h3>
          <p>Please Log In to see more!</p>
        </div>}
    </div>
  );
}
