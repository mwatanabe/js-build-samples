const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const Counter = require('./counter.jsx');
const reducer = require('./reducer');

const store = Redux.createStore(reducer);

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.body
    )
}

render();
store.subscribe(render);