import React from 'react';
import './Product.css';

export default (props) => (
    <div className="product">
        <div>
            <img src={props.url} alt="img"/>
        </div >
        <div>
        <div className="right">
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
        <div div='button'>
            <button onClick={() => props.deleteItem()}>Delete</button>
            <button >Edit</button>
        </div>
        </div>
    </div>
);