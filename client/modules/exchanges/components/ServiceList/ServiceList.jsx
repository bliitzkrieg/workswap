import React from 'react';
import { Input } from 'react-bootstrap';

class ServiceList extends React.Component {

    //buildServices() {
    //    return this.props.ser
    //}

    render() {
        console.log(this.props);
        return (
            <Input ref="offerType" type="select" label={ this.props.label }>
                <option value="select">Select</option>
            </Input>
        )
    }
}

export default ServiceList;