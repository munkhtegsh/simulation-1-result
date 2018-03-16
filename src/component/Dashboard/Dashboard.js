import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class DashBoard extends Component {

    constructor(props) {
        super(props);

    }

    deleteItem (id) {
        console.log(id)
        axios.delete(`/api/inventory/${id}`)
          .then((res) => {
            this.props.getInventory();
          });
        
      }

    render() {
        let list = this.props.inventory.map((item, i) => {
           return (
            <div key={i}>
                <Product  url={item.url} name={item.name} 
                            price={item.price}
                            deleteItem={() => this.deleteItem(item.product_id)}
                            />
            </div>
           )
        })
        return (
            <div className="dashboard">
                {list}
            </div>
        );
    }
}