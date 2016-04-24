const React = require('react'); // Must require react because <Hello/> is translated to React.createElement(Hello).
const ReactDOM = require('react-dom');
const Hello = require('./lib.jsx');

ReactDOM.render(<Hello />, document.body);