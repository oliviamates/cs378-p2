import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuItem.css';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title , image, description, price, count, updateSubtotal}) => {
    
    const decrease = () => {
        if(count > 0) {
            updateSubtotal(id, price, -1);
        }
    }
    const increase = () => {
        updateSubtotal(id, price, 1);
    }

    return (

    <div className="foodimage">
        <img src={`./images/${image}`} alt={title} className="menu-image" />
        <div className="foodtext">
            <h3 className="menu-title">{title}</h3>
            <h6>{description}</h6>
            <div className="combine">
                <h4 id="price">{price}</h4>
                <button className = "button1" onClick={decrease}>-</button>
                <h5>{count}</h5>
                <button className = "button2" onClick={increase}>+</button>

            </div>
        </div>
        
    </div>
    );
};

export default MenuItem;
