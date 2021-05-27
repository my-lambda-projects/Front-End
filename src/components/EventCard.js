import React, {useState, useEffect} from 'react';

export default function EventInfoCard (props) {
  const [Events, setPotLucks] = useState ([]);
  console.log (Events, 'data');

  return (
    <div>
      {/* <NewPotluckInfoForm/> */}
      <div>
        {Events.map (Event => {
          return (
            <div key={Event.id}>
              <h3>Event Name: {Event.eventName}</h3>
              <p>Location: {Event.location}</p>
              <p>Date: {Event.date}</p>
              <p>Time: {Event.time}</p>
            </div>
          );
        })}

      </div>
      {/* delete event button */}
    </div>
  );
}
