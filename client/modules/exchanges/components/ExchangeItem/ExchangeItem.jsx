import React from 'react';

class ExchangeItem extends React.Component {

    render() {
        return (
            <div className="exchange-item">
                { this.props.exchange.user.username }
            </div>
        );
    }
}

export default ExchangeItem;