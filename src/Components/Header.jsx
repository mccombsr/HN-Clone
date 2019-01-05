import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="search">
          <h1>H</h1>
          <h2>Search</h2>
          <h2>Hacker News</h2>
          <div className="searchContainer">
            <h1>Q</h1>
            <input
              type="text"
              placeholder="Search stories by title, url, or author"
            />
          </div>
          <p>
            by{" "}
            <a href="https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia">
              algolia
            </a>
          </p>
          <h2>SettingsBtn</h2>
        </div>
        <div className="filter">
            <h5>Search</h5>
            <select>
                <option value="all">All</option>
                <option value="stories">Stories</option>
                <option value="comments">Comments</option>
            </select>
            <h5>by</h5>
            <select>
                <option value="popularity">Popularity</option>
                <option value="date">Date</option>
            </select>
            <h5>for</h5>
            <select>
                <option value="allTime">All Time</option>
                <option value="24">Last 24h</option>
                <option value="week">Past Week</option>
                <option value="month">Past Month</option>
                <option value="year">Past Year</option>
                <option value="custom">Custom Range</option>
            </select>
        </div>
      </div>
    );
  }
}
