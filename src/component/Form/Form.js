import React, { Component } from 'react';

export default class Form extends Component {
    
    constructor() {
        super();
        this.state = {
            url: '',
            name: '',
            price: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.cancel = this.cancel.bind(this);
        this.addInventory = this.addInventory.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    cancel() {
        this.setState({
            url: '',
            name: '',
            price: 0
        });
    }

    addInventory() {

        this.setState({
            url: '',
            name: '',
            price: 0
        })
    }

    render() {
        return (
            <div className="form">
                <img src="" width="200" alt="image-priview"/>
                <input type="text" name="url" onChange={this.handleChange}/>
                <input type="text" name="name" onChange={this.handleChange}/>
                <input type="text" name="price" onChange={this.handleChange}/>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.addInventory}>Add</button>
            </div>
        );
    }
}