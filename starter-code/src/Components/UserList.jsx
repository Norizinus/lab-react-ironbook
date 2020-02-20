import React from "react";
import User from "./User";

class UserList extends React.Component {
  state = {
    search: ""
  };

  handleInputChange = event => {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    });
  };

  search = event => {
    event.preventDefault();

    // console.log("search entered");
  };

  render() {
    console.log(this.state.search);
    return (
      <React.Fragment>
        <form action="">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.handleInputChange}
            type="text"
          />
          <button onClick={this.search}>Search</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data
              .filter(value => {
                {
                  /* console.log(value); */
                }
                return (
                  value.firstName.toLowerCase().startsWith(this.state.search) ||
                  value.lastName.toLowerCase().startsWith(this.state.search)
                );
              })
              .map(user => {
                return <User key={user.id} data={user} />;
              })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default UserList;
