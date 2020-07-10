import React, { Component } from 'react';
class Counter extends Component {
    state = {
        counter: 0,
        tags: []
    };





    handleIncremant = () => {


        this.setState({ counter: this.state.counter + 1 });

    };


    render() {
        return (
            <div>

                <span className={this.getBadgeClasses()}>{this.counterFormate()}</span>
                <button className='btn btn-secondary btn-sm' onClick={
                    () => this.handleIncremant()
                }>increment </button>
            </div>

        );

    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge- ';
        classes += this.state.counter === 0 ? "warning" : "primary";
        return classes;
    }
    counterFormate() {
        return <p>{this.state.counter}</p>;
    }
}

export default Counter;