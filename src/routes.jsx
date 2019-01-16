import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Results from './Components/Results';
import Settings from './Components/Settings';
import About from './Components/About';
import Help from './Components/Help';
import Api from './Components/Api';
import HackerNews from './Components/HackerNews';
import CoolApps from './Components/CoolApps';

export default (
    <Switch>
        <Route component={Results} exact path ='/'/>
        <Route component={Settings} path ='/settings'/>
        <Route component={About} path ='/about'/>
        <Route component={Help} path ='/help'/>
        <Route component={Api} path ='/api'/>
        <Route component={HackerNews} path ='/hackerNews'/>
        <Route component={CoolApps} path ='/coolApps'/>
    </Switch>
)