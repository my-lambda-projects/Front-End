import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import { useHistory } from "react-router";



  const eventObj = {
    event_name:"",
    event_date:"",
    event_time:"",
    event_location:"",
    owner_id: "",
  };


export const AddEvent=(props)=>{

    const [event, setEvent] = useState(eventObj);

    const { push } = useHistory();
    const handleChange = (e)=>{
        setEvent({
            ...event, [e.target.name]: e.target.value
        });
        // console.log("Hanndle_change:",event);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        const newEvent = {
          event_name: event.event_name.trim(),
          event_date: event.event_date.trim(),
          event_time: event.event_time.trim(),
         event_location: event.event_location.trim(),
         owner_id:window.localStorage.getItem("user_id"),
         
        };
        // console.log("NewEvent",newEvent);
        props.addEvent(newEvent);
        setEvent(eventObj);
        push("/events");

      };

    return(
            <>
            
            <h3>Add a New Event</h3>
            <form onSubmit>
                <label htmlFor="event">Event Name:
                <input name='event_name' type='text' value ={event.event_name} onChange={handleChange} placeholder="Enter name here"/>
                </label>

                <label htmlFor="date">Date:
                <input name='event_date' type='text' value={event.event_date} onChange={handleChange} placeholder="Enter date here"/>
                </label>

                <label htmlFor="time">Time:
                <input name='event_time' type='text' value={event.event_time} onChange={handleChange} placeholder="Enter time here"/>
                </label>

                <label htmlFor="Location">Location:
                <input name='event_location' type='text' value={event.event_location} onChange={handleChange} placeholder="Enter location here"/>
                </label>
                <button className="btn" onClick={onSubmit}>Save</button>
            </form>
            </>

    )
}
const mapStateToProps = (state) => {
    return {
      allOrganizerEvents: state.eventReducer.allOrganizerEvents,
    };
  };
  
  export default connect(mapStateToProps, { addEvent })(AddEvent);
//export default AddEvent;