import React from 'react';
import Select from 'react-select';

class ServiceList extends React.Component {

    constructor() {
        super();
        this.state = {
            value: undefined
        };
    }

    buildServices() {
        return this.props.services.map(function(item) {
            return {
                value: item._id,
                label: item.name
            }
        })
    }

    doChange(value) {
        this.props.callback(value);
        this.setState({
            value
        });
    }

    render() {
        return (
            <div className="form-group">
                <label className="control-label">{ this.props.label }</label>
                <Select
                    name="test"
                    options={ this.buildServices() }
                    value={ this.state.value }
                    onChange={ this.doChange.bind(this) }
                />
            </div>
        )
    }
}

//<Input ref="offerType" defaultValue="selected" type="select" label={ this.props.label }>
//    <option value="selected" disabled>Select</option>
//    { this.buildServices() }
//</Input>

export default ServiceList;