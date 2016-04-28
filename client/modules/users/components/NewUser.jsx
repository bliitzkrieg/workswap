import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import ServiceList from '../../exchanges/containers/ServiceList.js';

class NewUser extends React.Component {

    constructor() {
        super();
        this.state = { };
    }

    onProfessionCB(value) {
        this.setState({
            profession: value
        });
    }

    render() {
        const {error} = this.props;
        return (
            <div>
                <h1>Sign Up</h1>
                {error ? <p style={{color: 'red'}}>{error}</p> : null}
                <form>
                    <Input ref="username" type="text" label="Username" placeholder="Username" />
                    <Input ref="email" type="email" label="Email" placeholder="Email" />
                    <Input ref="password" type="password" label="Password" placeholder="Password" />
                    <ServiceList label="What do you offer?" callback={ this.onProfessionCB.bind(this) } />
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
        const username = this.refs.username.refs.input;
        const email = this.refs.email.refs.input;
        const password = this.refs.password.refs.input;
        const referral = this.props.invite;
        const file = this.refs.profile_photo.refs.input.files;
        const profession = this.state.profession;

        create(username.value, email.value, password.value, file, referral, profession);
    }
}

export default NewUser;