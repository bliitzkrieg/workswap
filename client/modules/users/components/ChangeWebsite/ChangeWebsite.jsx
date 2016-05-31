import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ChangeWebsite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            website: props.user.profile.website || ''
        };
    }

    handleChange(e) {
        e.preventDefault();
        const website = e.target.value;

        this.setState({ website });
        this.props.callback(website);
    }

    render() {
        return (
            <FormGroup>
                <ControlLabel>Whats your Website?</ControlLabel>
                <FormControl ref="website"
                             value={ this.state.website }
                             onChange={ this.handleChange.bind(this) }
                             type="url"
                             placeholder={ 'http:/www.myawesomesite.com' } />
            </FormGroup>
        )
    }
}

export default ChangeWebsite;