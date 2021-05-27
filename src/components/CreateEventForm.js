import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
border: 1px solid gray;
    margin: 0 3rem;
    width: auto;
    display: flex; 
`;
const Inputs = styled.div`
margin: 3rem;
`;
const Button = styled.button`
margin: 3rem;
`;

const InitialCreateEventForm = {
  eventName: '',
  location: '',
  date: '',
  time: '',
  id: Date.now (),
};

//------------------------------------------------------------

export default function NewCreateEventForm () {
  const [newCreateEventForm, setNewCreateEventForm] = useState (
    InitialCreateEventForm
  );
  console.log (newCreateEventForm, 'hi');
  const changeHandler = e => {
    setNewCreateEventForm ({
      ...newCreateEventForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault ();
    const newEvent = {
      eventName: newCreateEventForm.eventName,
      location: newCreateEventForm.location,
      date: newCreateEventForm.date,
      time: newCreateEventForm.time,
      id: Date.now (),
    };

    return (
      <FormContainer>
        <form onSubmit={submitHandler}>
          <Inputs>
            <label>Event Name: </label>
            <input
              name="eventName"
              value={newCreateEventForm.eventName}
              onChange={changeHandler}
            />
          </Inputs>
          <Inputs>
            <label>Location: </label>
            <input
              name="location"
              value={newCreateEventForm.location}
              onChange={changeHandler}
            />
          </Inputs>
          <Inputs>
            <label>Date: </label>
            <input
              name="date"
              value={newCreateEventForm.date}
              onChange={changeHandler}
            />
          </Inputs>
          <Inputs>
            <label>Time: </label>
            <input
              name="time"
              value={newCreateEventForm.time}
              onChange={changeHandler}
            />
          </Inputs>
          <Button>Submit</Button>
        </form>
      </FormContainer>
    );
  };
}
