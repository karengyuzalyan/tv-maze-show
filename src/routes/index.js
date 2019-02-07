// React imports
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Component imports
import ShowDetails from 'src/pages/show-details/containers';
import { NotFound } from 'src/pages/not-found';
import Episode from 'src/pages/episode/containers';
import { Home } from 'src/pages/home';
// Css import
import 'bootstrap/dist/css/bootstrap.css';

export default class Routes extends Component {
    render() {
      return (
        <Router>
            <Switch>
                <Route path="/" exact render={Home}/>
                <Route path="/shows/:id/details" exact component={ShowDetails}/>
                <Route path="/shows/:id/episodebynumber" exact component={Episode} />
                <Route path="*" render={NotFound} />
            </Switch>
        </Router>);
    }
}
