import React from "react";
import Cards from "./components/Cards";

class App extends React.Component {
  state = { users: null };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  deleteHandler = (id) => {
    let List = [...this.state.users];
    List.splice(id, 1);
    this.setState({ users: List });
  };
  
  render() {
    if (this.state.users) {
      return (
        <div className="container">
          <div className="g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
            {this.state.users.map((user, index) => (
              <Cards
                key={index}
                id={index}
                name={user.name}
                phone={user.phone}
                email={user.email}
                website={user.website}
                delete={this.deleteHandler}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
            <div>Loading....</div>;
          </div>
        </div>
      );
    }
  }
}

export default App;
