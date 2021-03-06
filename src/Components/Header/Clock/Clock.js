import React from 'react'
import classes from './Clock.module.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className={classes.clock}>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

    export default Clock