import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
    <div className="graveCard m-1">
      <div class="studentName">
      <h5>RIP</h5>
      <h6>{student.firstName}</h6>
      <h6>{student.lastName}</h6>
      </div>
    </div>
    );
  }
}

export default GraveStone;
