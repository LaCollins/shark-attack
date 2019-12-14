import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    return (
      <div className="App row d-flex justify-content-center">
        <SharkTank />
        <Graveyard />
      </div>
    );
  }
}

export default App;
