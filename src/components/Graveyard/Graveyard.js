import './Graveyard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const graveCards = students.map((student) => <GraveStone key={student.id} student={student} />);

    return (
      <div className="graveyard row d-flex justify-content-center col-5">
        <div className="row d-flex justify-content-center graveContainer">
          {graveCards}
        </div>
        <h3 id="graveLabel">Graveyard</h3>
      </div>
    );
  }
}

export default Graveyard;
