import React from 'react';
import { Alert } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        if(this.props.error) {
            return (
                <Alert bsStyle="danger">{ this.props.error }</Alert>
            );
        }
        return null;
    }
}


export default Header;