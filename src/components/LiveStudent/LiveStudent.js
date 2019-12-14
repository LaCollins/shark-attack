import React from 'react';
// import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

import './LiveStudent.scss';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="studentCard m-1">
        <img src={student.imgUrl} className="card-img-top" alt={student.name}/>
          <p>{student.firstName}</p>
      </div>
    );
  }
}

export default Student;
