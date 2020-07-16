import React, { Component } from 'react';
import Counters from './compenets/counters';
import NavBar from './compenets/navbar';
import './App.css';



class App extends Component {

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
      <React.Fragment>
        <NavBar countersNumber={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}

          />
        </main>
      </React.Fragment>

    );
  }

}

export default App;
