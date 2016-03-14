import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import Login from '../../users/containers/Login';

class CreateExchange extends React.Component {

    constructor() {
        super();
        this.state = {
            lng: null,
            lat: null
        }
    }

    componentDidMount() {
        if(!Meteor.user()) {
            FlowRouter.go('/login/create');
        }

        var that = this;

        navigator.geolocation.getCurrentPosition(function(geolocation) {
            that.setState({
                lat: geolocation.coords.latitude,
                lng: geolocation.coords.longitude
            });
        });
    }

    //requestType, OfferType, title, details, remote, lat, lng
    render() {
        const {error} = this.props;
        return (
            <div>
                <h1>Create Exchange</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <form>

                    <Input ref="requestType" type="select" label="What are you looking for?">
                        <option value="select">Select</option>
                        <option value="designer">Designer</option>
                    </Input>

                    <Input ref="offerType" type="select" label="What are you offering in exchange?">
                        <option value="select">Select</option>
                        <option value="developer">Developer</option>
                    </Input>

                    <Input ref="title" type="text" label="Your exchange Title" placeholder="Developer Looking For Designer" />
                    <Input ref="details" type="textarea" label="Give a little more details" placeholder="I am building a todo app and need a designer to help style a component..." />

                    <Input ref="remote" type="select" label="Remote or Local?" placeholder="Remote">
                        <option value="remote">Remote</option>
                        <option value="local">Local</option>
                    </Input>

                    <input ref="lat" value={ this.state.lat } type="hidden"/>
                    <input ref="lng" value={ this.state.lng } type="hidden"/>
                    <ButtonInput onClick={this.createExchange.bind(this)}
                                 value="Create"
                                 type="submit" />
                </form>
            </div>
        )
    }

    createExchange(e) {
        e.preventDefault();
        const {create} = this.props;
        const requestType = this.refs.requestType.refs.input;
        const offerType = this.refs.offerType.refs.input;
        const title = this.refs.title.refs.input;
        const details = this.refs.details.refs.input;
        const remote = this.refs.remote.refs.input;
        const {lat, lng} = this.refs;
        create(requestType.value, offerType.value, title.value, details.value, remote.value, lat.value, lng.value);
    }
}

export default CreateExchange;