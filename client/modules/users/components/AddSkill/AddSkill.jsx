import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Skill from '../Skill/Skill.jsx';

class AddSkill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      skill: '',
      skills: props.user.profile.skills || []
    };
  }

  handleChange(e) {
    e.preventDefault();
    const skill = e.target.value;

    this.setState({ skill });
  }

  addSkill(e) {
    e.preventDefault();
    const skill = ReactDOM.findDOMNode(this.refs.skill);

    if(skill.value.length === 0) {
      return;
    }

    const skills = [
      ...this.state.skills,
      skill.value
    ];

    this.setState({ skills });
    this.props.callback(skills);

    //Reset input
    this.setState({ skill: '' });
  }

  buildSkills() {
    return this.state.skills.map((item, index) => {
      return (
        <Skill key={ index } item={ item } index={ index } callback={ this.removeSkillCallback.bind(this) } />
      );
    })
  }

  removeSkillCallback(index) {
    const skills = this.state.skills.slice(0, index).concat(this.state.skills.slice(index + 1));
    this.setState({ skills })
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={ 8 }>
            <FormGroup>
              <ControlLabel>Add some skills</ControlLabel>
              <FormControl ref="skill"
                           value={ this.state.skill }
                           type="text"
                           onChange={ this.handleChange.bind(this) }
                           placeholder="JavaScript" />
            </FormGroup>
          </Col>
          <Col lg={ 4 }>
            <FormGroup>
              <Button onClick={ this.addSkill.bind(this) } block className="add__skill_button">Add Skill</Button>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={ 12 }>
            { this.buildSkills() }
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddSkill;