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
        const profession = this.props.services.filter(function(item) {
            return item._id === value;
        })[0];
        this.props.callback(profession);
        this.setState({
            value
        });
    }

    render() {
        const clearable = this.props.clearable ? false : this.props.clearable;
        return (
            <div className="form-group">
                <label className="control-label">{ this.props.label }</label>
                <Select
                    name="test"
                    options={ this.buildServices() }
                    value={ this.state.value }
                    onChange={ this.doChange.bind(this) }
                    clearable={ clearable }
                />
            </div>
        )
    }
}

export default ServiceList;