import React from 'react';
import { Navbar } from 'react-bootstrap';
import ExchangeSearch from '../../../exchanges/containers/ExchangeSearch';

class HeaderSearch extends React.Component {

    render() {
        return (
            <Navbar.Form pullLeft>
                <ExchangeSearch />
            </Navbar.Form>
        );
    }

}


export default HeaderSearch;