import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  /******************************************************************
   *  NOTE TO SELF:
   * Will need to add featrue to display serach button only when
   * this.state.search is not an empty string
   ******************************************************************/

  // Handle Search bar input to change search on state.
  handleSearch = e => {
    this.setState({ search: e.target.value });
    console.log(this.state);
  };

  // Submits search on enter
  enterPressed = event => {
    if (event.key === "Enter") {
      console.log(`Submitted ${this.state.search} for search.`);
    }
  };

  render() {
    return (
      <div className="search">
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search stories by title, url, or author"
          onChange={this.handleSearch}
          onKeyPress={this.enterPressed}
        />
      </div>
    );
  }
}
