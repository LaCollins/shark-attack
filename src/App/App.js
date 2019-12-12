import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
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
