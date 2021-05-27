import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
border: 1px solid gray;
    margin: 0 5rem;
    width: auto;
    display: flex; 
`;
const Inputs = styled.div`
margin: 1rem;
`;
const Button = styled.button`
margin: 1rem;
`;

const InitialPotluckInfo = {
  eventName: '',
  location: '',
  date: '',
  time: '',
  id: Date.now (),
};

 
  return (
    <FormContainer>
      <form onSubmit={submitHandler}>
        <Inputs>
          <label>Event Name: </label>
          <input
            name="eventName"
            value={newPotluckInfo.eventName}
            onChange={changeHandler}
          />
        </Inputs>
        <Inputs>
          <label>Location: </label>
          <input
            name="location"
            value={newPotluckInfo.location}
            onChange={changeHandler}
          />
        </Inputs>
        <Inputs>
          <label>Date: </label>
          <input
            name="date"
            value={newPotluckInfo.date}
            onChange={changeHandler}
          />
        </Inputs>
        <Inputs>
          <label>Time: </label>
          <input
            name="time"
            value={newPotluckInfo.time}
            onChange={changeHandler}
          />
        </Inputs>
        <Button>Submit</Button>
      </form>
    </FormContainer>
  );
}
