import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [itemcount, setItemCounts] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const updateSubtotal = (id, price, quantityChange) => {
    setSubtotal((prevSubtotal) => {
      const newTotal = prevSubtotal + price * quantityChange;
      return parseFloat(newTotal.toFixed(2));
    });

    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + quantityChange,
    }));
  };

  const clearTotal = () => {
    setSubtotal(0);
    setItemCounts(menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));
  };

  function alertOrder(total) {
    if(total == 0){
      alert("No items in the cart!");
    }
    else {
      const ordered = menuItems
      .filter(item => itemcount[item.id] > 0)
      .map(item => `${itemcount[item.id]} ${item.title}`)
      .join("\n");
      alert(`You ordered:\n${ordered}\n`);
    }
  };

  return (
    <div>
      <img id="photo" src="./images/restaurant-logo.jpg" alt="Restaurant Logo" className="logo" />
      <h4 id="tagline">Delicious and Fresh!</h4>
      <h3 id="header">Homemade Japanese food in Austin</h3>

    <div className = "container">
      {menuItems.map((item) => (
          <MenuItem 
            key={item.id}
            image={item.imageName}
            id= {item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            count={itemcount[item.id]}
            updateSubtotal ={updateSubtotal}
          />   
        ))}
      
    </div>
    <div className = "ordering">
      <h4>Subtotal:$ </h4>
      <h4>{subtotal.toFixed(2)}</h4>
      <button className="order1" onClick={() => alertOrder(subtotal)}>Order</button>

      <button className = "order2" onClick={() => clearTotal()}>Clear All</button>

    </div>

    </div>

  );
}

export default App;
