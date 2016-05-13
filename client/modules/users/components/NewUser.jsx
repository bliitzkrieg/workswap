import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

class NewUser extends React.Component {

    render() {
        const {error} = this.props;
        return (
            <div>
                <h1>Sign Up</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <form>
                    <Input ref="fname" type="text" label="First Name" placeholder="First Name" />
                    <Input ref="lname" type="text" label="Last Name" placeholder="Last Name" />
                    <Input ref="email" type="email" label="Email" placeholder="Email" />
                    <Input ref="password" type="password" label="Password" placeholder="Password" />
                    <Input ref="profession" type="text" label="What do you classify yourself as?" placeholder="Accountant" />
                    <Input ref="profile_photo" type="file" label="Profile Photo" help="Upload a profile Picture" />
                    <ButtonInput onClick={this.createUser.bind(this)}
                                 value="Sign Up"
                                 type="submit" />
                </form>
            </div>
        )
    }

    createUser(e) {
        e.preventDefault();
        const { create } = this.props;
        const fname = this.refs.fname.refs.input;
        const lname = this.refs.lname.refs.input;
        const email = this.refs.email.refs.input;
        const password = this.refs.password.refs.input;
        const referral = this.props.invite;
        const file = this.refs.profile_photo.refs.input.files;
        const profession = this.refs.profession.refs.input;

        create(fname.value, lname.value, email.value, password.value, file, referral, profession.value);
    }
}

export default NewUser;