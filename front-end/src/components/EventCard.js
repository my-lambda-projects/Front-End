import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addEvent, editEvent, deleteEvent } from "../actions/eventActions";

const EventCard = (props) => {
  const { event } = props;
  const { push } = useHistory();
  

  const addEvent = () => {
   
    props.addEvent(props.event_id);
    push("/events/add");
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
          {console.log("Events_data:",event)}
          <h3>Event_name :{event.event_name}</h3>
          <h5>Event_Date :{event.event_date}</h5>
          <h5>Event_Time :{event.event_time}</h5>
          <h5>Event_Location :{event.event_location}</h5>
          <h3>Items:</h3>
          <h5>Event_Item_Name :{event.items[0].item_name}</h5>
          <h5>Event_Item_Responsible_for :{event.items[0].responsible_for}</h5>
          <h3>Guests :</h3>
          <h5>Guest_Name :{event.guests[0].username}</h5>
          <h5>Guest_Response :{event.guests[0].response}</h5>
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
