import React, {useEffect} from 'react';
import EventCard from './EventCard';
import {useHistory} from 'react-router-dom';

const Organizer = (props) => {
 const {push} = useHistory ();
useEffect (() => {
  props.getPotluck ();
}, []);


  return (
    <div>
      <section>
        {props.Events.map (item => <EventCard item={item} key={item.id} />)}
      </section>
      <button
        onClick={() => {
          push ('/Organizer');
        }}
      >
        create Event
      </button>
    </div>
  );
};


export default Organizer;
