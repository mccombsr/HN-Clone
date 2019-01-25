import React, { Component } from "react";
import Header from "./Header";
import Story from "./Story";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="resultsContainer">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />

          <div className="btnContainer">
            <div className="pageBtn btn">1</div>
            <div className="pageBtn btn">2</div>
            <div className="pageBtn btn">3</div>
            <div className="pageBtn btn">4</div>
            <div className="pageBtn btn">5</div>
            <div className="pageBtn btn">6</div>
            <div className="etcBtn btn">...</div>
            <div className="pageBtn btn">50</div>
            <div className="nextPage btn">>></div>
          </div>
        </div>
      </div>
    );
  }
}
