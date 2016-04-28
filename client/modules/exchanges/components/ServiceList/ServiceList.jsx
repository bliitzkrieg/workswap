import React from 'react';
import Select from 'react-select';

class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.selected || undefined
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

export default ServiceList;