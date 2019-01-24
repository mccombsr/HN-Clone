import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <li>•</li>
        <Link to="/settings">
          <li>Settings</li>
        </Link>
        <li>•</li>
        <Link to="/help">
          <li>Help</li>
        </Link>
        <li>•</li>
        <Link to="/api">
          <li>API</li>
        </Link>
        <li>•</li>

        <li>
          <Link to="hackerNews">Hacker News</Link>
        </li>
        <li>•</li>
        <li>
          <a href="https://github.com/algolia/hn-search">Fork/Contribute</a>
        </li>
        <li>•</li>
        <li>Status</li>
        <li>•</li>
        <li>
          <Link to="coolApps">Cool apps</Link>
        </li>
      </ul>
    </div>
  );
}
