import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ChangeProfession extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profession: props.user.profile.profession || ''
        };
    }

    handleChange(e) {
        e.preventDefault();
        const profession = e.target.value;

        this.setState({ profession });
        this.props.callback(profession);
    }

    render() {
        return (
            <FormGroup>
                <ControlLabel>Change Profession</ControlLabel>
                <FormControl ref="profession"
                             value={ this.state.profession }
                             onChange={ this.handleChange.bind(this) }
                             type="text"
                             placeholder="Web Developer" />
            </FormGroup>
        )
    }
}

export default ChangeProfession;