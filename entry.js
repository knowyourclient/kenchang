var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

var divStyle = {
  fontFamily: 'Georgia'
};

var App = React.createClass({
  render: function(){
    return (
	  <Router history={appHistory}>
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
		  <a href="http://www.modestbook.com/">modestbook</a>
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
		<hr/>
		  <h3>Amazon</h3>
		  fee calculation engine and marketplace tools
		  <h3>Plethora</h3>
		  cad software integration & .net/windows expertise
		  <ul>
			<li>project lead for cad integrations with SOLIDWORKS, Autodesk Inventor, and Siemens NX</li>
			<li>service framework for analysis and quoting engine</li>
			<li>virtualized test automation for cad tools</li>
		  </ul>
		  <h3>JPMorgan Chase</h3>
		  cash flow management software for treasury services
		  <ul>
			<li>app development lead for cash management and payments platform</li>
			<li>excel plugin development</li>
			<li>project management and coordination of developer, qa, and ba resources</li>
		  </ul>
		  <h3>Barclays Capital</h3>
		  commodities desk trading tools
		  <ul>
			<li>data warehousing for US commodities fundamentals</li>
			<li>electricity market price forecasting tool</li>
			<li>internal api and framework development for config, logging, messaging and data access</li>
		  </ul>		  
		  <h3>Halliburton</h3>
		  telemetry software for measurement while drilling
		  <ul>
			<li>service/client apps for execution & monitoring of telemetry systems (electromagnetic, mud pulse)</li>
			<li>drill job reporting app</li>
			<li>global oilfield survey management tools</li>
		  </ul>	
		  <h3>University of Texas at Austin</h3>
		  b.s. electrical and computer engineering
      </div>
    )
  }
});

ReactDOM.render(<div style={divStyle}><App /></div>, document.getElementById('app'));
