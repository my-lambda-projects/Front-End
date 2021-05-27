import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addEvent, editEvent, deleteEvent } from "../actions/eventActions";

const EventCard = (props) => {
  const { event } = props;
  const { push } = useHistory();

  const addEvent = (e) => {
    props.addEvent(props.event_id);
    push("/events")
  };
  const editEvent = (event_id) => {
    props.editEvent(props.event_id);
    push("/events")
    push(`/events/edit/${event.recipe_id}`);
  };

  const deleteEvent = (event_id) => {
    props.deleteEvent(props.event_id);
    push("/events")
  };

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
        <div>
          <button className="btn_Add" onClick={addEvent}>
            Add Event
          </button>
          <button className="btn_Edit" onClick={editEvent}>
            Edit Event
          </button>
          <button className="btn_Delete" onClick={deleteEvent}>
            Delete Event
          </button>
        </div>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user_id: state.userReducer.user_id,
  };
};
export default connect(mapStateToProps, { addEvent, deleteEvent, editEvent })(
  EventCard
);
// export default EventCard;
