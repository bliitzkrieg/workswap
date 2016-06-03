import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Select from 'react-select';

class ChangeLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: props.user.profile.country || '',
      state: props.user.profile.state || '',
      city: props.user.profile.city || ''
    };
  }

  getCountries() {
    return this.props.countries.map((country) => {
        return {
          value: country.code,
          label: country.name
        }
    });
  }

  getStates() {
    let that = this;

    if(this.state.country) {

      const country = this.props.countries.find((country) => {
        return country.code === that.state.country;
      });

      return country.states.map((state) => {
        return {
          value: state.code,
          label: state.name
        }
      });

    }
  }

  handleCountryChange(value) {
    this.setState({
      country: value
    });

    this.props.callback({
      country: value,
      state: this.state.state,
      city: this.state.city
    });
  }

  handleStateChange(value) {
    this.setState({
      state: value
    });

    this.props.callback({
      country: this.state.country,
      state: value,
      city: this.state.city
    });
  }

  handleCityChange(e) {
    e.preventDefault();

    this.setState({
      city: e.target.value
    });

    this.props.callback({
      country: this.state.country,
      state: this.state.state,
      city: e.target.value
    });
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Where are you from?</ControlLabel>
        <Row>
          <Col lg={4}>
            <ControlLabel>Country</ControlLabel>
            <Select
              ref="country"
              name="user-country"
              value={ this.state.country }
              options={ this.getCountries() }
              onChange={ this.handleCountryChange.bind(this) }
            />
          </Col>
          <Col lg={4}>
            <ControlLabel>State / Province</ControlLabel>
            <Select
              ref="state"
              name="user-state"
              disabled={ !this.state.country }
              value={ this.state.state }
              options={ this.getStates() }
              onChange={ this.handleStateChange.bind(this) }
            />
          </Col>
          <Col lg={4}>
            <ControlLabel>City</ControlLabel>
            <FormControl ref="city"
                         value={ this.state.city }
                         onChange={ this.handleCityChange.bind(this) }
                         type="text"
                         placeholder="Toronto" />
          </Col>
        </Row>
      </FormGroup>
    )
  }
}

export default ChangeLocation;