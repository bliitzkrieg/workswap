import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class Skill extends React.Component {

  removeSkill() {
    this.props.callback(this.props.index);
  }

  render() {
    return (
      <div className="user__skill">
        { this.props.item }
        <Glyphicon className="user__skill__remove" glyph="remove" onClick={ this.removeSkill.bind(this) } />
      </div>
    )
  }
}

export default Skill;