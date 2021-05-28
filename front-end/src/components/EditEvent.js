import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editEvent } from "../actions/eventActions";
import { useHistory, useParams } from "react-router";
import getEventId from "../actions/eventActions";


const FormValues = {
  event_name: "",
  event_date: "",
  event_time: "",
  event_location: "",
  user_id: "",
};

const eventObj = {
  event_name: "",
  event_date: "",
  event_time: "",
  event_location: "",
  user_id: "",
};

const EditEvent = (props) => {
  const [event, setEvent] = useState(eventObj);
  const [formValues, setFormValues] = useState(FormValues);
  const { eventId } = useParams();
  const { getEventId } = props;

  const { push } = useHistory();

  useEffect(() => {
    getEventId(eventId);
    setFormvalues();
  }, [getEventId, eventId]);


  const setFormvalues =()=>{
    FormValues.event_name = props.event_name;
    console.log("Edit_event_name:",FormValues.event_name);
  }

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const editedEvent = {
      event_name: event.event_name.trim(),
      event_date: event.event_date.trim(),
      event_time: event.event_time.trim(),
      event_location: event.event_location.trim(),
      user_id: window.localStorage.getItem("user_id"),
    };
    console.log("editedEvent", editedEvent);
    props.editEvent(event.eventId, editedEvent);
    push("/events");
  };

  return (
    <>
      <h3>Edit Event</h3>
      <form onSubmit>
        <label htmlFor="event">
          Event Name:
          <input
            name="event_name"
            type="text"
            value={event.event_name}
            onChange={handleChange}
            placeholder="Enter name here"
          />
        </label>

        <label htmlFor="date">
          Date:
          <input
            name="event_date"
            type="text"
            value={event.event_date}
            onChange={handleChange}
            placeholder="Enter date here"
          />
        </label>

        <label htmlFor="time">
          Time:
          <input
            name="event_time"
            type="text"
            value={event.event_time}
            onChange={handleChange}
            placeholder="Enter time here"
          />
        </label>

        <label htmlFor="Location">
          Location:
          <input
            name="event_location"
            type="text"
            value={event.event_location}
            onChange={handleChange}
            placeholder="Enter location here"
          />
        </label>
        <button className="btn" onClick={onSubmit}>
          Save Changes
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allOrganizerEvents: state.eventReducer.allOrganizerEvents,
  };
};

export default connect(mapStateToProps, { getEventId, editEvent })(EditEvent);
//export default AddEvent;
