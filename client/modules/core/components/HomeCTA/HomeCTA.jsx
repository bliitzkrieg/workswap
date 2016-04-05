import React from 'react';
import ExchangeSearch from '../../../exchanges/containers/ExchangeSearch';
import Overlay from '../Overlay/Overlay.jsx';

class HomeCTA extends React.Component {

    render() {
        return (
            <div className="cta-home">
                <Overlay />
                <h1>The number one place to<br/> exchange your talent.</h1>
                <ExchangeSearch />
            </div>
        );
    }
}


export default HomeCTA;