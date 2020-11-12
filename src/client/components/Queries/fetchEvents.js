import React, { Component } from 'react';
import { Query } from 'react-apollo'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../error'
import gql from 'graphql-tag'

const GET_EVENTS = gql`
  query events {
  events{
    title
    eventType
    eventDate
  }
}
`;

class FetchEvents extends Component {
    render(){
        const { children } = this.props;
        return (
            <Query query={GET_EVENTS}>
                {({ loading, error, data }) => {
                    if (loading) return <Spinner />;
                    if (error) return <Error><p>{error.message}</p></Error>;

                    const { events } = data;
                    console.log(events)

                    return React.Children.map(children, function(child){
                        return React.cloneElement(child, { events });
                    })
                }}
            </Query>
        )
    }
}

export default FetchEvents