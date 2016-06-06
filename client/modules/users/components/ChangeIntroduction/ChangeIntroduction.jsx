import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ChangeIntroduction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: props.user.profile.introduction || ''
        };
    }

    handleChange(e) {
        e.preventDefault();
        const introduction = e.target.value;

        this.setState({ introduction });
        this.props.callback(introduction);
    }

    render() {
        return (
            <FormGroup>
                <ControlLabel>Give an introduction</ControlLabel>
                <FormControl ref="introduction"
                             value={ this.state.introduction }
                             onChange={ this.handleChange.bind(this) }
                             componentClass="textarea"
                             placeholder="Keep it clear and simple" />
            </FormGroup>
        )
    }
}

export default ChangeIntroduction;