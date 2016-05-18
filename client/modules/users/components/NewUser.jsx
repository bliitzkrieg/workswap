import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, FormGroup, ControlLabel } from 'react-bootstrap';

class NewUser extends React.Component {

    render() {
        const {error} = this.props;
        return (
            <div>
                <h1>Sign Up</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <form>
                    <FormGroup>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl ref="fname" type="text" placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl ref="lname" type="text" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl ref="email" type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl ref="password" type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>What do you classify yourself as?</ControlLabel>
                        <FormControl ref="profession" type="text" placeholder="Accountant" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Profile Photo</ControlLabel>
                        <input type="file" ref="profile_photo" />
                    </FormGroup>
                    <Button onClick={this.createUser.bind(this)} type="submit">
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }

    createUser(e) {
        e.preventDefault();
        const { create } = this.props;
        const fname = ReactDOM.findDOMNode(this.refs.fname);
        const lname = ReactDOM.findDOMNode(this.refs.lname);
        const email = ReactDOM.findDOMNode(this.refs.email);
        const password = ReactDOM.findDOMNode(this.refs.password);
        const referral = this.props.invite;
        const file = this.refs.profile_photo.files;
        const profession = ReactDOM.findDOMNode(this.refs.profession);

        create(fname.value, lname.value, email.value, password.value, file, referral, profession.value);
    }
}

export default NewUser;