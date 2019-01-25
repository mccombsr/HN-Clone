import React, { Component } from "react";
import BlankHeader from "./BlankHeader";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BlankHeader />
        <div className="settingsContainer">
          <h1 className="settingsTitle">Settings</h1>
          <div className="settings">
            {/* Display Settings */}
            <h2 className="section">Display options</h2>
            <hr className="section" />
            <div className="display">
              {/* Select dom style */}
              <div className="group">
                <p>Style</p>
                <select>
                  <option value="default">Default</option>
                  <option value="experimental">Experimental</option>
                </select>
              </div>

              {/* select hits per page */}
              <div className="group">
                <p>Hits per page</p>
                <select>
                  <option value="" />
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            {/* Ranking settings */}
            <h2 className="section">Ranking options</h2>
            <hr className="section" />

            {/* Select default search type */}
            <div className="selector">
              <p>Default type</p>
              <select>
                <option value="all">All</option>
                <option value="stories" selected>
                  Stories
                </option>
                <option value="comments">Comments</option>
              </select>
            </div>

            {/* Select default sort order */}
            <div className="selector">
              <p>Default sort order</p>
              <select>
                <option value="recent">Most Recent First</option>
                <option value="popular" selected>
                  Most Popular First
                </option>
              </select>
            </div>

            {/* Select default date range */}
            <div className="selector">
              <p>Default date range</p>
              <select>
                <option value="24">Last 24h</option>
                <option value="week">Past Week</option>
                <option value="month">Past Month</option>
                <option value="year">Past Year</option>
                <option value="forever" selected>
                  Forever
                </option>
              </select>
            </div>

            {/* Toggle story text search parameter */}
            <div className="selector">
              <p>Use the story text for the search</p>
              <input type="checkbox" />
            </div>

            {/* Toggle author's name search parameter */}
            <div className="selector">
              <p>Use the author's username for the search</p>
              <input type="checkbox" />
            </div>

            {/* Toggle typo-tolerance in search */}
            <div className="selector">
              <p>Typo-tolerance</p>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
