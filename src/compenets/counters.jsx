import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {


    render() {
        const { onReset, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div className="container ml-9">
                <button className="btn btn-success btn-sm m-2"
                    onClick={onReset}

                > reset counter</button>


                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}


                    >


                    </Counter>

                )}
            </div>



        );

    }
}

export default Counters;