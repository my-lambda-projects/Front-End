import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addEvent, editEvent, deleteEvent } from "../actions/eventActions";
const EventCard = (props) => {
  const { event } = props;
  const { push } = useHistory();

  const addEvent = () => {
    //props.addEvent(event.event_id);
    push("/events/add");
  };

  const editEvent = () => {
    push(`/events/edit/${event.event_id}`);
    //props.editEvent(event.event_id);
   //push("/events");
   
  };
  const deleteEvent = () => {
    //console.log("Delete_event-id:",event.event_id)
    props.deleteEvent(event.event_id);
    push("/events");
  };
  return (
    <div className="EventCard">
      <header className="App-header">
        <div className="card">
          <h3>Event_name :{event.event_name}</h3>
          <h5>Event_Date :{event.event_date}</h5>
          <h5>Event_Time :{event.event_time}</h5>
          <h5>Event_Location :{event.event_location}</h5>
          <h3>Items:</h3>
          <div>
            {event.items.map((item) => {
              console.log(item);
              return (
                <div key={item.event_item_id}>
                  <p>Item:{item.item_name}</p>
                  <p>SignUp:{item.item_name}</p>
                </div>
              );
            })}
          </div>
          <h3>Guests :</h3>
          <div>
            {event.guests.map((guest, idx) => {
              return (
                <div key={idx}>
                  <p>Guest:{guest.username}</p>
                  <p>Response:{guest.response}</p>
                </div>
              );
            })}
          </div>
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
export default connect(mapStateToProps, { deleteEvent })(
  EventCard
);
