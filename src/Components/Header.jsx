import React, { Component } from "react";
import hLogo from "../styles/images/hLogo3.webp";
import algolia from "../styles/images/algolia.svg";
import Search from './Search';

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
        <div className="searchContainer">
          <div className="titleContainer">
            <img src={hLogo} alt="logo" className="logo" />
            <div className="title">
              <h2>Search</h2>
              <h2>Hacker News</h2>
            </div>
          </div>
          <div className="searchSubCtnr">
            <Search/>
            {/* <div className="search">
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Search stories by title, url, or author"
              />
            </div> */}
            <p className="credit">
              by{" "}
              <a href="https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia">
                <img src={algolia} alt="algolia logo hyperlink" />
              </a>
            </p>
          </div>
          <i class="fas fa-sliders-h settings" />
        </div>
        <div className="filterContainer">
          <div className="filter">
            <h5 className="cat1">Search</h5>
            <select className="cat1 dropdown">
              <option value="all">All</option>
              <option value="stories" selected>Stories</option>
              <option value="comments">Comments</option>
            </select>
            <h5 className="cat2">by</h5>
            <select className="cat2 dropdown">
              <option value="popularity">Popularity</option>
              <option value="date">Date</option>
            </select>
            <h5 className="cat3">for</h5>
            <select className="cat3 dropdown">
              <option value="allTime">All Time</option>
              <option value="24">Last 24h</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div className="countContainer">
            <p className="count">17,213,000 (0.007 seconds)</p>
            <i className="fas fa-share-alt shareIcon"></i>
          </div>
        </div>
      </div>
    );
  }
}
