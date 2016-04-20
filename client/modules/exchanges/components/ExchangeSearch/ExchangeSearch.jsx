import React from 'react';
import { Input, Button, Glyphicon } from 'react-bootstrap';

class ExchangeSearch extends React.Component {

    buildButton() {
        return (
            <Button glyph="music" onClick={ this.searchExchange.bind(this) }>
                <Glyphicon glyph="search" />
            </Button>
        );
    }

    render() {
        return (
            <Input placeholder="Find Exchange" type="text" buttonAfter={ this.buildButton() } />
        );
    }

    searchExchange(e) {
        e.preventDefault();
        alert('do search');
        //const {create} = this.props;
        //const requestType = this.state.request;
        //const offerType = this.state.offer;
        //const title = this.refs.title.refs.input;
        //const details = this.refs.details.refs.input;
        //create(requestType.value, offerType.value, title.value, details.value);
    }
}

export default ExchangeSearch;