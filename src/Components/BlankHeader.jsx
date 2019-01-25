import React, { Component } from "react";
import hLogo from "../styles/images/hLogo3.webp";
import algolia from "../styles/images/algolia.svg";

export default class BlankHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="searchContainer">
          <div className="titleContainer">
            <img src={hLogo} alt="logo" className="logo" />
          </div>
        </div>
      </div>
    );
  }
}
