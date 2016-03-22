import React from 'react';
import ExchangeItem from '../ExchangeItem/ExchangeItem.jsx';

class ListExchanges extends React.Component {

    buildList() {
        if(this.props.exchanges.length === 0) {
            return (
                <div>
                    No Results.
                </div>
            )
        }
        return this.props.exchanges.map(function(item) {
            return (
                <ExchangeItem key={ item._id } exchange={ item }/>
            )
        })
    }

    render() {

        return (
            <div>
                { this.buildList() }
            </div>
        )
    }
}

export default ListExchanges;