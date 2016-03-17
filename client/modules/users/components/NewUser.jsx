import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';


class NewUser extends React.Component {

    constructor() {
        super();
        this.state = {
            lng: null,
            lat: null
        };
    }

    componentDidMount() {
            var that = this;

            navigator.geolocation.getCurrentPosition(function(geolocation) {
                that.setState({
                    lat: geolocation.coords.latitude,
                    lng: geolocation.coords.longitude
                });
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
                    <input ref="lat" value={ this.state.lat } type="hidden"/>
                    <input ref="lng" value={ this.state.lng } type="hidden"/>
                    <ButtonInput onClick={this.createUser.bind(this)}
                                 value="Sign Up"
                                 type="submit" />
                </form>
            </div>
        )
    }

    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {lat, lng} = this.refs;
        const username = this.refs.username.refs.input;
        const email = this.refs.email.refs.input;
        const password = this.refs.password.refs.input;
        const referral = this.props.invite;
        create(username.value, email.value, password.value, lat.value, lng.value, referral);
    }
}

export default NewUser;