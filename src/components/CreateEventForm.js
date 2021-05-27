import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Organizer = props => {
  const {push} = useHistory ();
  const [newEvent, setnewEvent] = useState ({
    date: '',
    organizer: '',
    location: '',
    name: '',
    time: '',
  });

  const changeHandler = e => {
    e.preventDefault ();
    setnewEvent ({...newEvent, [e.target.name]: e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault ();
    props.addEvent (newEvent);
    setnewEvent ({
      date: '',
      organizer: '',
      location: '',
      name: '',
      time: '',
    });
    push ('/route');
  };
  return (
    <div>
      <h1>Create your Event</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="date"
          placeholder="date"
          value={newEvent.date}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="organizer"
          placeholder="organizer"
          value={newEvent.organizer}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          value={newEvent.location}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newEvent.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          value={newEvent.time}
          onChange={changeHandler}
        />
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
};

export default Organizer;
