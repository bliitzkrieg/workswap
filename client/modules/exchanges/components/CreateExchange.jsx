import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import Login from '../../users/containers/Login';

class CreateExchange extends React.Component {

    componentDidMount() {
        if(!Meteor.user()) {
            FlowRouter.go('/login/create');
        }
    }

    render() {
        const {error} = this.props;
        return (
            <div>
                Create component!
            </div>
        )
    }

    createExchange(e) {
        e.preventDefault();
        //const {create} = this.props;
        //const {lat, lng} = this.refs;
        //const username = this.refs.username.refs.input;
        //const email = this.refs.email.refs.input;
        //const password = this.refs.password.refs.input;
        //create(username.value, email.value, password.value, lat.value, lng.value);
    }
}

export default CreateExchange;