const React = require('react');

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <p>
                Clicked: {value} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </p>
        )
    }
}

module.exports = Counter;
