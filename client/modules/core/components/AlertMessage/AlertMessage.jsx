import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: true
        }
    }

    handleAlertDismiss() {
        this.setState({
            visible: false
        });
    }

    render() {
        if(this.props.message && this.state.visible) {
            return (
                <Alert bsStyle={ this.props.type } onDismiss={ this.handleAlertDismiss.bind(this) } dismissAfter={ this.props.timeout }>{ this.props.message }</Alert>
            );
        }
        return null;
    }
}


export default AlertMessage;