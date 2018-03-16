import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory')
      .then((res) => {
        this.setState({inventory: res.data});
      });
  }

  getInventory() {
    axios.get('/api/inventory')
    .then((res) => {
      this.setState({inventory: res.data});
    });
  }



  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Dashboard inventory={this.state.inventory}
                      getInventory={() => this.getInventory()}
          />
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
