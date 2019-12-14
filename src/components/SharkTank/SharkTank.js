import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => <LiveStudent key={student.id} student={student} />);

    return (
      <div className="sharkTank row d-flex justify-content-center col-5">
        <div className="row d-flex justify-content-center studentContainer">
            {studentCards}
        </div>
        <h3 id="tankLabel">Shark Tank</h3>
      </div>
    );
  }
}

export default SharkTank;
