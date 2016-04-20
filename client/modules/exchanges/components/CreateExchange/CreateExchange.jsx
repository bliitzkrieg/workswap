import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import ServiceList from '../../containers/ServiceList';

class CreateExchange extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    componentDidMount() {
        if(!Meteor.user()) {
            FlowRouter.go('/login/create');
        }
    }

    onRequestCB(value) {
        this.setState({
            request: value
        });
    }

    onOfferCB(value) {
        this.setState({
            offer: value
        });
    }

    render() {
        const { error } = this.props;
        return (
            <div>
                <h1>Create Exchange</h1>
                { error ? <p style={{color: 'red'}}>{error}</p> : null }
                <form>

                    <ServiceList label="What are you looking for?" callback={ this.onRequestCB.bind(this) } />
                    <ServiceList label="What are you offering in exchange?" callback={ this.onOfferCB.bind(this) } />

                    <Input ref="title" type="text" label="Your exchange Title" placeholder="Developer Looking For Designer" />
                    <Input ref="details" type="textarea" label="Give a little more details" placeholder="I am building a todo app and need a designer to help style a component..." />

                    <ButtonInput onClick={ this.createExchange.bind(this) }
                                 value="Create"
                                 type="submit" />
                </form>
            </div>
        )
    }

    createExchange(e) {
        e.preventDefault();
        const {create} = this.props;
        const requestType = this.state.request;
        const offerType = this.state.offer;
        const title = this.refs.title.refs.input;
        const details = this.refs.details.refs.input;
        create(requestType, offerType, title.value, details.value);
    }
}

export default CreateExchange;