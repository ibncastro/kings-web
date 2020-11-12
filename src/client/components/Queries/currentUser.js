import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../error'

const CURRENT_USER = gql `
    query currentUser {
        currentUser {
            username
        }
    }
`;



class CurrentUser extends Component {
    render() {
        const { children } = this.props;
        return (
           <Query query={CURRENT_USER}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const { currentUser } = data;

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { currentUser })
                   })
               }}
           </Query>
        );
    }
}

export default CurrentUser;
