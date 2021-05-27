import React from 'react';
import moment from 'moment';
import {Header, Icon, Container, List, Card,} from 'semantic-ui-react';

const Guest = ({event, eventTime, /*user_id*/}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Poppins',
      }}
    >
      <Container textAlign="center">
        <Header as="h2" icon textAlign="center" style={{fontSize: '3rem'}}>
          <Icon name="calendar check" />
          {event.data.event_name}
        </Header>
      </Container>
      <Container textAlign="center">
        <List style={{fontSize: '2rem'}}>
          <List.Item>
            <List.Icon name="calendar" />
            {moment (event.data.date).format ('LL')}
          </List.Item>
          <List.Item>
            <List.Icon name="map marker" />
            {event.data.address}, {event.data.city}, {event.data.state}{' '}
          </List.Item>
          <List.Item>
            <List.Icon name="outline clock" />
            {`${eventTime}`}
          </List.Item>
          <List.Item>
            <List.Icon name="newspaper outline" />
            {event.data.description}
          </List.Item>
        </List>
      </Container>
      <Card.Group centered style={{margin: '30px'}}>
        <Card style={{padding: '20px'}}>
          <Card.Header textAlign="center" style={{fontSize: '2.5rem'}}>
            Guests
          </Card.Header>
          <Card.Content>
            <List style={{margin: 'auto'}}>
              {event.data.guests.map (guest => {
                //Mapping over guests to display

                if (guest.attending) {
                  return (
                    <List.Item key={guest.user_id} style={{fontSize: '2rem'}}>
                      {guest.full_name} - Attending{' '}
                    </List.Item>
                  );
                } else {
                  return (
                    <List.Item key={guest.user_id} style={{fontSize: '2rem'}}>
                      {guest.full_name} - Invited
                    </List.Item>
                  );
                }
              })}
            </List>
          </Card.Content>
        </Card>
        <Card style={{padding: '20px'}}>
          <Card.Header textAlign="center" style={{fontSize: '2.5rem'}}>
            Choose a Dish
          </Card.Header>
          <Card.Content>
            <List style={{margin: 'auto'}}>
              {' '}
              {typeof event.data.recipes === 'string'
                ? <List.Item>{event.data.recipes}</List.Item>
                : event.data.recipes.map (recipe => {
                    //Determine if Recipes is an array or string and return value
                    return (
                      <List.Item
                        key={recipe.recipe_name}
                        style={{fontSize: '2rem'}}
                      >

                        {/* Toggling between the name and unclaimed */}

                      </List.Item>
                    );
                  })}
            </List>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Guest;
