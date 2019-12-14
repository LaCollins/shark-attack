import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents });
    this.setState({ deadStudents });
  }

  seekAndDestroy = () => {
    if (this.state.livingStudents.length > 0) {
      const randomSelect = (Math.floor(Math.random() * this.state.livingStudents.length));
      const studentToKill = this.state.livingStudents[randomSelect].id;
      studentData.followTheLight(studentToKill);
      const livingStudents = studentData.livingStudents();
      const deadStudents = studentData.dearlyBeloved();
      this.setState({ livingStudents });
      this.setState({ deadStudents });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="row d-flex justify-content-center mt-2"><div onClick={this.seekAndDestroy} className="btn btn-danger">SHARK ATTACK</div></div>
          <div className="row d-flex justify-content-center">
          <SharkTank students={this.state.livingStudents} />
          <Graveyard students={this.state.deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
