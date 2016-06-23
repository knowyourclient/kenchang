var React = require('react');
var ReactDOM = require('react-dom');

var divStyle = {
  fontFamily: 'Helvetica'
};

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
	    kenchang.org
		<p>
		  <a href="https://www.facebook.com/kennethchang">facebook</a><br/>
		  <a href="https://www.instagram.com/modestbook/">instagram</a><br/>
		  <a href="https://www.linkedin.com/in/kenchang1">linkedin</a><br/>
		</p>
      </div>
    )
  }
});

ReactDOM.render(<div style={divStyle}><HelloWorld /></div>, document.getElementById('app'));
