var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

var divStyle = {
  fontFamily: 'Helvetica'
};

var App = React.createClass({
  render: function(){
    return (
	  <Router>
        <Route path='/' component={Hello} />
        <Route path='/resume' component={Resume} /> 
      </Router>)
    }
});

var Hello = React.createClass({
  render: function(){
    return (
      <div>
	    kenchang.org
		<p>
		  <a href="https://www.linkedin.com/in/kenchang1">linkedin</a><br/>
		  <a href="https://www.facebook.com/kennethchang">facebook</a><br/>
		  <a href="https://www.instagram.com/modestbook/">instagram</a><br/>
		</p>
		<p>
		  <Link to='/resume'>resume</Link><br/>
		  <a href="https://www.modestbook.com/">modestbook</a>
		</p>
      </div>
    )
  }
});

var Resume = React.createClass({
  render: function(){
    return (
      <div>
	    <Link to='/'>kenchang.org</Link>
		<p>
		  try again later.
		</p>
      </div>
    )
  }
});

ReactDOM.render(<div style={divStyle}><App /></div>, document.getElementById('app'));
