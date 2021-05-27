import React, {useEffect, useState} from 'react';
import  '../Styles/signup.css'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { getOrganizerEvents } from "../actions/eventActions";
import EventCard from "./EventCard"


 const EventsList =(props) =>{
    const { getOrganizerEvents } = props;
    // const [events, setEvents] = useState ({
    //     allEvents : [
    //         {
    //           event_id: '',
    //           event_name: '',
    //           event_date:'',
    //           event_time: '',
    //           event_location: '',
    //           organizer: '',
    //           items : [
    //               {
    //                   item_name:'', 
    //                   responsible_for: '',
    //               },  
    //               ],
    //           guests : [
    //                   {
    //                       username: '', 
    //                       confirmation: ''
    //                   },
    //                   ],
    //         },
    //       ],
    //   });
// useEffect(()=>{
//     axiosWithAuth()
//     .get('https://ft-potluck-planner-5.herokuapp.com/api/events')
//     .then(res=>{
//         console.log("All Events:",res.data);
//         setEvents(res.data);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

// },[])

useEffect(()=>{
    console.log("All Events:",props);
    getOrganizerEvents(props.userid);
    
},[])

    return(
        <div>
            <h1>EventList</h1>
            {/* <div>{
                 props.allOrganizerEvents.map(event=><EventCard key={props.event_id} event={event}/>)
                }
         
            </div> */}
           
        </div>
    );

}
const mapStateToProps = (state) => {
 
    return {
        allOrganizerEvents: state.eventReducer.allOrganizerEvents,
      user_id:state.userReducer.user_id,
    };
  };
  
  export default connect(mapStateToProps, { getOrganizerEvents })(EventsList);
// export default EventsList;