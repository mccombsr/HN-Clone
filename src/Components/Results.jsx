import React, {Component} from 'react';

export default class Results extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [
                {
                    title: "Stephen Hawking has died",
                    points: 6015,
                    author: "Cogito",
                    age: "10 Months ago",
                    comments: 436,
                    url: "(http://www.bbc.com/news/uk-43396008"
                }
            ]
        };
    }

    render(){
        return(
            <div className="resultsContainer">
                <h1>Results</h1>
                <h1>Results</h1>
                <h1>Results</h1>
                
            </div>
        )
    }
}