import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 4 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
        ],

    };

    handelDelete = counter => {
        console.log('handel delete function', counter);
        const counters = this.state.counters.filter(c => c.id !== counter);
        this.setState({ counters });
    };
    handleReset = () => {
        let counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;

        });
        this.setState({ counters });
    };
    handelIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };

        counters[index].value++;
        this.setState({ counters });
    };
    handelDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };

        counters[index].value--;
        this.setState({ counters });

    };

    render() {
        return (
            <div className="container ml-9">
                <button className="btn btn-success btn-sm m-2"
                    onClick={this.handleReset}

                > reset counter</button>


                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handelDelete}
                        onIncrement={this.handelIncrement}
                        onDecrement={this.handelDecrement}
                        counter={counter}


                    >


                    </Counter>

                )}
            </div>



        );

    }
}

export default Counters;