import React from 'react';

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
                <div key={item._id} className="test-class">
                    { item.title }
                </div>
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