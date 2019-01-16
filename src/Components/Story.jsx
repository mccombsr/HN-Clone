import React, {Component} from 'react';

export default class Story extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className="storyContainer">
                <h1 className="title">Stephen Hawking has died</h1>
                <div className="storyInfo">
                    <div className="points">6015 points</div>
                    <div className="author">Cogito</div>
                    <div className="age">10 months ago</div>
                    <div className="commentsNum">436 comments</div>
                    <div className="url">(http://www.bbc.com/news/uk-43396008)</div>
                </div>
            </div>
        )
    }
}