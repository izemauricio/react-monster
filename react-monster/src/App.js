import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

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
    const { monsters, searchString } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBar
          placeholder='search monsters'
          handleChange={e => this.setState({ searchString: e.target.value })} />
        <CardList monsters={filteredMonster} />
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
