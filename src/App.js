import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.css";

// import  from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters; same as above
    // const searchField = this.state.searchField; same as above
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Yugach Monsters Rolodex</h1>

        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my name is <em>Yugach</em>. I am writting <strong>react</strong>
//           now.
//         </p>
//         <p>Hey! you still here.</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
