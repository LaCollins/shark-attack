import React from 'react';
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
        <img src={student.imgUrl} className="card-img-top" alt={student.firstName}/>
          <p>{student.firstName}</p>
      </div>
    );
  }
}

export default Student;
