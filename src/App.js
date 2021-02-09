import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value }, () =>
  //     console.log(this.state)
  //   );
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        {" "}
        <div className="App">
          <div className="search_box_container">
            <SearchBox
              className="search_box"
              placeholder="Search Monster"
              handleChange={this.handleChange}
            />
          </div>
          <CardList monsters={filterdMonsters} />
        </div>
      </>
    );
  }
}

export default App;
