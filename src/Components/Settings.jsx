import React, {Component} from 'react';

export default class Settings extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className='settingsContainer'>
                <h1 className='settingsTitle'>Settings</h1>
                <div className="display">
                    <h2>Display options</h2>
                    <div className="displayOptions">
                        <p>Style</p>
                        <select>
                            <option value="default">Default</option>
                            <option value="experimental">Experimental</option>
                        </select>
                        <p>Hits per page</p>
                        <select>
                            <option value=""></option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <h2>Ranking options</h2>
                    <p>Default type</p>
                    <select>
                        <option value="all">All</option>
                        <option value="stories" selected>Stories</option>
                        <option value="comments">Comments</option>
                    </select>
                    <p>Default sort order</p>
                    <select>
                        <option value="recent">Most Recent First</option>
                        <option value="popular" selected>Most Popular First</option>
                    </select>
                    <p>Default date range</p>
                    <select>
                        <option value="24">Last 24h</option>
                        <option value="week">Past Week</option>
                        <option value="month">Past Month</option>
                        <option value="year">Past Year</option>
                        <option value="forever" selected>Forever</option>
                    </select>
                    <p>Use the story text for the search</p>
                    <input type="checkbox"/>
                    <p>Use the author's username for the search</p>
                    <input type="checkbox"/>
                    <p>Typo-tolerance</p>
                    <input type="checkbox"/>
                </div>
            </div>
        )
    }
}