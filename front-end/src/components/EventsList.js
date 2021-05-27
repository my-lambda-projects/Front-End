import React, { useEffect } from "react";
import "../Styles/signup.css";
import { connect } from "react-redux";
import { getOrganizerEvents } from "../actions/eventActions";
import EventCard from "./EventCard";
const EventsList = (props) => {
  const { getOrganizerEvents } = props;
  useEffect(() => {
    console.log("All Events:", props);
    debugger
     getOrganizerEvents(props.user_id);
    // getOrganizerEvents("39c1471d-b4ac-4935-962d-836f01abe3d8");
    debugger
  }, []);
  return (
    <div>
      <h1>EventList</h1>
      <div>
        {props.allOrganizerEvents.map((event) => (
          <EventCard key={props.event_id} event={event} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
    console.log("State:",state);
  return {
    allOrganizerEvents: state.eventReducer.allOrganizerEvents,
    user_id: state.userReducer.user_id,
  };
};
export default connect(mapStateToProps, { getOrganizerEvents })(EventsList);