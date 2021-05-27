import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import { useHistory, useParams } from 'react-router';
import getEventId from '../actions/eventActions'



const initialFormValues = {
    event_name:"",
    date:"",
    time:"",
    location:"",
  };
  const eventObj = {
    event_name:"",
    date:"",
    time:"",
    location:"",
  };


const EditEvent=(props)=>{

    const [formValues, setFormValues] = useState(initialFormValues);
    const [event, setEvent] = useState(eventObj);
    const { eventId } = useParams();
    const { getEventId } = props;

    useEffect(() => {
        getEventId(eventId);
      }, [getEventId, eventId]);

    const handleChange = (e)=>{
        setEvent({
            ...event, [e.target.name]: e.target.value
        });

    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        const newEvent = {
          event_name: formValues.event_name.trim(),
          date: formValues.date.trim(),
          time: formValues.time.trim(),
         location: formValues.location.trim(),
        };
        props.editEvent(newEvent);
        setFormValues(initialFormValues);

      };

    return(
            <>
            
            <h3>Edit Event</h3>
            <form onSubmit>
                <label htmlFor="event">Event Name:
                <input name='event_name' type='text' value ={event.event_name} onChange={handleChange} placeholder="Enter name here"/>
                </label>

                <label htmlFor="date">Date:
                <input name='date' type='text' value={event.event_date} onChange={handleChange} placeholder="Enter date here"/>
                </label>

                <label htmlFor="time">Time:
                <input name='time' type='text' value={event.event_time} onChange={handleChange} placeholder="Enter time here"/>
                </label>

                <label htmlFor="Location">Location:
                <input name='location' type='text' value={event.event_location} onChange={handleChange} placeholder="Enter location here"/>
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
  
    export default connect(mapStateToProps, { getEventId, addEvent })(EditEvent);
//export default AddEvent;