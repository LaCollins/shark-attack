import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank />
      </div>
    );
  }
}

export default App;
