import React from 'react';

const EventCard =(props)=>{
     const {event} = props;

    return (
    <div className="EventCard">
      <header className="App-header">
        {/* <h1>Welcome to Sridevi's Event's page</h1> */}
        <div className="card">
        <h3>{event.name}</h3>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <h5>{event.location}</h5>
        <h3>Items:</h3>
        <h5>{event.items[0].item_name}</h5>
        <h5>{event.items[0].responsible_for}</h5>
        <h3>Guests:</h3>
        <h5>{event.guests[0].username}</h5>
        <h5>{event.items[0].confirmation}</h5>
        </div>
        
      </header>
    </div>
    )
}

export default EventCard;