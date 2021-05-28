import React, { useEffect } from "react";
import "../Styles/signup.css";
import { connect } from "react-redux";
import { getOrganizerEvents } from "../actions/eventActions";
import EventCard from "./EventCard";
import { useHistory } from "react-router";

const EventsList = (props) => {
    
  const { getOrganizerEvents } = props;
  // console.log("props:",props.user_id);


  useEffect(() => {
    // console.log("All Events:", props);
    const userid = window.localStorage.getItem("user_id");
    const token = window.localStorage.getItem("token");
    if(userid && token){
     getOrganizerEvents(userid);
    }
    else{
      return;
    }
  }, [getOrganizerEvents]);

  return (
    <div>
      <h1>EventList</h1>
      <div>
        {/* {console.log("allOganizer_data:",props.allOrganizerEvents)} */}
        {props.allOrganizerEvents.length > 0 && props.allOrganizerEvents.map((event) => (
          <EventCard key={event.event_id} event={event} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    // console.log("State:",state);
  return {
    user_id: state.userReducer.user_id,
    allOrganizerEvents: state.eventReducer.allOrganizerEvents,
    isLoading:state.userReducer.isLoading
  };
};
export default connect(mapStateToProps, { getOrganizerEvents })(EventsList);