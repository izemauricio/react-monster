import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters</h1>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

function AppFunctionBkp() {
  return (
    <div className="App">
      <h1>Monsters</h1>
    </div>
  );
}

export default App;
