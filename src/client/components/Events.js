import React, { Component } from 'react'
import Event from './events/index'
import EventsQuery from './Queries/fetchEvents'


export default class Events extends Component {
    render() {
        return (
            <EventsQuery>
                <Event />
            </EventsQuery>
        )
    }
}
