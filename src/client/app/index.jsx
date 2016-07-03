import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


import About from './About.jsx';
import Contact from './Contact.jsx';
import NoMatch from './NoMatch.jsx';


class App extends React.Component {

  componentDidMount(){
    console.log('ddd')
  }

  render(){
    return (
      <div>
          <p>Hello App</p>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}




render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="/about" component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));