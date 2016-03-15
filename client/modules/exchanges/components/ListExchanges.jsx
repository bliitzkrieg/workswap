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
        console.log(this.props.exchanges);
        return this.props.exchanges.map(function(item) {
            return (
                <div key={item._id} className="test-class">
                    { item.title } - { item.user.username }
                    <br/>
                    { item.createdAt.toString() }
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