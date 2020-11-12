import React, { Component } from 'react'

class Post extends Component {
    render(){
        const { event } = this.props;
        return(
            <div className="card">
                <div className="card-body">
                <h2>{event.title}</h2>
                <p>{event.eventDate}</p>
                <p>{event.eventType}</p>
                <p>{event.created}</p>
                </div>
            </div>
        )
    }
}

export default class Event extends Component {
    render() {
        const { events } = this.props;
        return (
           <div>
                {events.map((event,i) => 
                    <Post key={i} event={event} />
                )}
           </div>
        )
    }
}
