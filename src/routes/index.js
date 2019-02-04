// React imports
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Component imports
import { ShowDetails } from 'src/elements/show-details';
import { NotFound } from 'src/elements/not-found';
import { Episode } from 'src/elements/episode';
import { Home } from 'src/elements/home';
// Css import
import 'bootstrap/dist/css/bootstrap.css';

export default class Routes extends Component {
    render() {
      return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shows/:id/details" exact component={ShowDetails}/>
                <Route path="/shows/:id/episodebynumber" exact component={Episode} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>);
    }
}
