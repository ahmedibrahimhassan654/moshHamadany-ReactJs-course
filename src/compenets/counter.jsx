import React, { Component } from 'react';
class Counter extends Component {





    render() {

        return (
            <div className="row">
                <div className="col-1">
                     <span className={this.getBadgeClasses()}>{this.counterFormate()}</span>


                </div>
                <div className="col">

                <button className='btn btn-secondary btn-sm'
                    onClick={() => this.props.onIncrement(this.props.counter)}>
                    +
                </button>


                <button 
                className="btn btn-primary btn-sm m-2"
                onClick={() => this.props.onDecrement(this.props.counter)}
                disabled={this.props.counter.value===0?"disapled":""}
                    
                    
                    >
                        -
                        
                </button>

                <button

                    onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>

                </div>


                


            </div>

        );

    }

    getBadgeClasses() {
        let classes = "badge badge-sm m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    counterFormate() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}

export default Counter;